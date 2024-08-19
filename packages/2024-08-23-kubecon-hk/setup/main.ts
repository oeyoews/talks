import { defineAppSetup } from '@slidev/types'
import { NuAsciinemaPlayer } from '@nolebase/ui-asciinema'
import 'asciinema-player/dist/bundle/asciinema-player.css'

export default defineAppSetup(({ app }) => {
  app.component('NuAsciinemaPlayer', NuAsciinemaPlayer)
})
