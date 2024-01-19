import { getStoryblokApi } from '@storyblok/react/rsc'
import StoryblokStory from '@storyblok/react/story'

export const dynamicParams = true

export default async function Page({ params, preview }: any) {
  let lang = params.lang || 'sv'
  let slug = params.slug ? params.slug.join('/') : 'home'

  const version = preview ? 'draft' : 'published'

  const storyblokApi = getStoryblokApi()
  let { data } = await storyblokApi.get(`cdn/stories/${slug}`, {
    version: version,
    cv: Math.random(),
    language: lang,
    resolve_links: 'url',
  })

  return (
    <div>
      <StoryblokStory story={data.story} />
    </div>
  )
}

export async function generateStaticParams({ params, preview }: any) {
  const storyblokApi = getStoryblokApi()

  const version = preview ? 'draft' : 'published'

  let { data } = await storyblokApi.get('cdn/links/', {
    version: version,
    resolve_links: 'url',
  })
  let paths: { slug: any; lang: any }[] = []
  Object.keys(data.links).forEach((linkKey) => {
    if (data.links[linkKey].is_folder) {
      return
    }
    const slug = data.links[linkKey].slug

    if (slug == 'home') {
      return
    }

    let splittedSlug = slug.split('/')

    paths.push({ slug: splittedSlug, lang: params.lang })
  })
  return paths
}
