import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import type { TGuestbookList } from '@/types/Guestbook.types'

export const useSlider = (data: TGuestbookList | null) => {
  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>
        let mouseOver = false
        function clearNextTimeout() {
          clearTimeout(timeout)
        }
        function nextTimeout() {
          clearTimeout(timeout)
          if (mouseOver) return
          timeout = setTimeout(() => {
            slider.next()
          }, 5000)
        }
        function mouseOverEvent() {
          mouseOver = true
          clearNextTimeout()
        }
        function mouseOutEvent() {
          mouseOver = false
          nextTimeout()
        }
        {
          slider.on('created', () => {
            slider.container.addEventListener('mouseover', mouseOverEvent)
            slider.container.addEventListener('mouseout', mouseOutEvent)
            nextTimeout()
          })
          slider.on('destroyed', () => {
            slider.container.removeEventListener('mouseover', mouseOverEvent)
            slider.container.removeEventListener('mouseout', mouseOutEvent)
          })
          slider.on('dragStarted', clearNextTimeout)
          slider.on('animationEnded', nextTimeout)
          slider.on('updated', nextTimeout)
        }
      },
    ]
  )
  if (sliderRef && data) return sliderRef
}
