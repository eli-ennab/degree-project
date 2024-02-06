import { getStoryblokApi } from '@storyblok/react/rsc'
import StoryblokStory from '@storyblok/react/story'

export const dynamicParams = true

export default async function Page({ params, preview }: any) {
  let lang = params.lang || 'sv'
  let slug = params.slug ? params.slug.join('/') : 'home'

  const version = preview ? 'draft' : 'published'

  const storyblokApi = getStoryblokApi()
  let { data } = await storyblokApi.get(`cdn/stories/${slug}`, {
    version,
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
