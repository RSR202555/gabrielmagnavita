import { createClient } from '@/lib/supabase/server'
import type { Comment } from '@/types/blog'
import { approveComment, rejectComment, replyToComment } from './actions'
import ReplyForm from './ReplyForm'
import ConfirmSubmitButton from '@/components/admin/ConfirmSubmitButton'

function formatDate(d: string) {
  return new Date(d).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })
}

export default async function CommentsPage() {
  const supabase = await createClient()

  const { data: comments } = await supabase
    .from('comments')
    .select('*, posts(slug, title)')
    .order('created_at', { ascending: false })

  const pending = comments?.filter((c) => !c.approved) ?? []
  const approved = comments?.filter((c) => c.approved) ?? []

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="font-headline font-bold text-navy-blue text-2xl">Comentários</h1>
        <p className="font-body text-gray-400 text-sm mt-1">
          {pending.length} pendente{pending.length !== 1 ? 's' : ''} · {approved.length} aprovado{approved.length !== 1 ? 's' : ''}
        </p>
      </div>

      {pending.length > 0 && (
        <div className="mb-10">
          <h2 className="font-body font-semibold text-sm text-golden uppercase tracking-wider mb-4">
            Aguardando aprovação ({pending.length})
          </h2>
          <div className="space-y-4">
            {pending.map((comment) => (
              <CommentCard
                key={comment.id}
                comment={comment}
                postSlug={comment.posts?.slug ?? ''}
                postTitle={comment.posts?.title ?? ''}
                pending
              />
            ))}
          </div>
        </div>
      )}

      <div>
        <h2 className="font-body font-semibold text-sm text-gray-400 uppercase tracking-wider mb-4">
          Aprovados ({approved.length})
        </h2>
        {approved.length === 0 ? (
          <div className="bg-white rounded-2xl p-10 text-center shadow-sm">
            <span className="material-symbols-outlined text-4xl text-gray-300 block mb-2">chat</span>
            <p className="font-body text-gray-400 text-sm">Nenhum comentário aprovado ainda.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {approved.map((comment) => (
              <CommentCard
                key={comment.id}
                comment={comment}
                postSlug={comment.posts?.slug ?? ''}
                postTitle={comment.posts?.title ?? ''}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

function CommentCard({
  comment,
  postSlug,
  postTitle,
  pending = false,
}: {
  comment: Comment & { posts?: { slug: string; title: string } }
  postSlug: string
  postTitle: string
  pending?: boolean
}) {
  return (
    <div className={`bg-white rounded-xl shadow-sm p-5 border-l-4 ${pending ? 'border-golden' : 'border-transparent'}`}>
      <div className="flex items-start justify-between gap-4 flex-wrap">
        <div>
          <div className="flex items-center gap-2 flex-wrap">
            <p className="font-body font-semibold text-gray-800 text-sm">{comment.name}</p>
            <span className="font-body text-gray-400 text-xs">{comment.email}</span>
          </div>
          <p className="font-body text-gray-400 text-xs mt-0.5">
            {formatDate(comment.created_at)} · Post:{' '}
            <span className="text-navy-blue">{postTitle}</span>
          </p>
        </div>

        <div className="flex items-center gap-2">
          {pending && (
            <form action={approveComment.bind(null, comment.id, postSlug)}>
              <button
                type="submit"
                className="flex items-center gap-1 text-xs font-body font-semibold bg-green-100 text-green-700 hover:bg-green-200 px-3 py-1.5 rounded-lg transition-colors"
              >
                <span className="material-symbols-outlined text-sm">check</span>
                Aprovar
              </button>
            </form>
          )}
          <form action={rejectComment.bind(null, comment.id)}>
            <ConfirmSubmitButton
              className="flex items-center gap-1 text-xs font-body font-semibold bg-red-50 text-red-500 hover:bg-red-100 px-3 py-1.5 rounded-lg transition-colors"
              message="Deletar este comentário?"
            >
              <span className="material-symbols-outlined text-sm">delete</span>
              Deletar
            </ConfirmSubmitButton>
          </form>
        </div>
      </div>

      <p className="font-body text-gray-700 text-sm mt-3 leading-relaxed">{comment.content}</p>

      {comment.admin_reply ? (
        <div className="mt-3 bg-navy-blue/5 border-l-4 border-golden rounded-r-lg p-3">
          <p className="font-body text-xs font-semibold text-golden mb-1">Sua resposta</p>
          <p className="font-body text-gray-700 text-sm">{comment.admin_reply}</p>
        </div>
      ) : (
        <ReplyForm commentId={comment.id} postSlug={postSlug} action={replyToComment.bind(null, comment.id, postSlug)} />
      )}
    </div>
  )
}
