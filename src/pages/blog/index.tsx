import Layout from 'layouts'
import { BlogListing } from 'components/blog'

export type BlogMeta = {
  title: string
  category: Category
  slug: string
  tagline: string
  publishedOn?: string
  tags?: string[]
}

type Category = 'parsers' | 'web-design'

import * as ResponsivenessWithoutBreakpoints from '../web-design/responsiveness-without-breakpoints.mdx'
import * as JsonParserRust1 from '../parsers/json-rust-procedural-1.mdx'

const articles = [ResponsivenessWithoutBreakpoints, JsonParserRust1]
export const blogsMeta: BlogMeta[] = articles.map(blog => blog.meta)

export default function BlogIndex() {
  return (
    <Layout title='Blogs' description='Blog Posts'>
      <h1>Blog</h1>
      <p>
        Below are the articles in my blog. I enjoy technical writing in general, and I like to write
        about Software Engineering, Computer Science, and Programming Languages.
      </p>
      <p>
        I also write tutorials aimed at intermediate programmers, I believe there is a proliferation
        of entry-level tutorials but it is difficult to find quality materials for taking the next
        step beyond the beginner level. I hope to help with that!
      </p>
      <ul>
        {blogsMeta.map(meta => (
          <BlogListing meta={meta} key={meta.slug} />
        ))}
      </ul>
    </Layout>
  )
}
