export type Post = {
  id: string
  title: string
  slug: string
  content: string
  excerpt: string | null
  cover_image: string | null
  category: string | null
  tags: string[]
  published: boolean
  published_at: string | null
  created_at: string
  updated_at: string
}

export type Comment = {
  id: string
  post_id: string
  name: string
  email: string
  content: string
  approved: boolean
  admin_reply: string | null
  admin_replied_at: string | null
  created_at: string
}
