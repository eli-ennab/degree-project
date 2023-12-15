import { storyblokInit, apiPlugin} from '@storyblok/react/rsc'
import StoryblokProvider from '@/components/StoryblokProvider'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
 
export const metadata = {
  title: 'Nioosha Shams',
  description: 'A Digital Representation of Nioosha Shams',
}
 
storyblokInit({
  accessToken: process.env.storyblokApiToken,
  use: [apiPlugin]
})
 
export default function RootLayout({ children }: any) {
  return (
    <StoryblokProvider>
      <html lang='sv'>
        <body>
        <Navigation/>
          {children}
        <Footer/>
        </body>
      </html>
    </StoryblokProvider>
  )
}