import { storyblokEditable, StoryblokComponent } from '@storyblok/react/rsc'

export default function Page({ blok }: any) {
  console.log(
    `
                                       
  (                              )  
( )\\(      (                ) ( /(  
))((_)\    ))\\ (     (    ( /( )\\()) 
/((_)((_)  /((_))\\ )  )\\ ) )(_)|(_)\  
(_))| |(_) (_)) _(_/\\ _(_/(((_)_| |(_)
/ -_) || | / -_) ' \\)) ' \\)) _\` | '_ \\ 
\\___|_||_| \\___|_||_||_||_|\\__,_|_.__/ `
  )

  console.log(
    '%cFind me https://github.com/eli-ennab',
    'color: #022CA1; font-family:monospace; font-size: 12px'
  )

  return (
    <main {...storyblokEditable(blok)}>
      {blok.body?.map((nestedBlok: any) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </main>
  )
}
