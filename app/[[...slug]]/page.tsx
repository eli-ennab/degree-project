import {
    getStoryblokApi,
  } from '@storyblok/react/rsc'
  import StoryblokStory from '@storyblok/react/story'
   
  export const dynamicParams = true
   
  export default async function Page({params}: any) {
    let slug = params.slug ? params.slug.join('/') : 'hem'
   
    const storyblokApi = getStoryblokApi()
    let { data } = await storyblokApi.get(`cdn/stories/${slug}`, {version: 'draft', cv: Math.random()})
   
    return (
      <div>
        <StoryblokStory story={data.story} />
      </div>
    )
  }
   
   
  export async function generateStaticParams() {
   
    const storyblokApi = getStoryblokApi()
    let { data } = await storyblokApi.get('cdn/links/' ,{
        version: 'draft'
    })
    let paths: { slug: any }[] = []
    Object.keys(data.links).forEach((linkKey) => {
        if (data.links[linkKey].is_folder) {
        return
        }
        const slug = data.links[linkKey].slug
        
        if(slug == 'hem'){
            return
        }
   
        let splittedSlug = slug.split('/')
    
        paths.push({ slug: splittedSlug })
    })
    return paths
   
  }