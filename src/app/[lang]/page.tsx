import Content from './_components/content/Content'
import Navigation from './_components/navigation/Navigation'

const getLandingPageData = async (lang: string) => {
  const version = process.env.STORYBLOK_DATA_VERSION
  const token = process.env.STORYBLOK_TOKEN
  const url = `https://api.storyblok.com/v2/cdn/stories/landing-page?version=${version}&token=${token}&language=${lang}`
  let request = await fetch(url, { next: { revalidate: 10 } })

  const storyData = await request.json()
  const { nav_section, content } = storyData.story.content

  return {
    nav_section: nav_section[0],
    content: content[0],
  }
}

export default async function Home({ params: { lang } }: any) {
  const data = await getLandingPageData(lang)

  return (
    <main>
      <Navigation data={data.nav_section} lang={lang} />
      <Content data={data.content} lang={lang} />
    </main>
  )
}
