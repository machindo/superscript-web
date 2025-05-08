<template>
  <section class="narrow-container panels">
    <div class="panel panel-heading">
      <h2>What people are saying</h2>
    </div>
    <div class="panel testimonial1">
      <img class="testimonial-image" src="/images/featured_kickstarter_comixcentral_badge-w-background.jpg" alt="ComixCentral Featured Kickstarter">
      <blockquote>
        "Undoubtedly the most important software to be created for Comic book creators since Clip Studio Paint streamlined digital illustration.
        This is a game changer for all the Comic writers out there trying to make film scripting software fit their work instead of the other
        way around!"
        <cite> — <a href="https://www.comixcentral.com/">ComixCentral</a></cite>
      </blockquote>
    </div>
    <blockquote class="panel testimonial2">
      "Intuitive, powerful and versatile"
      <cite> — M. R. Carey (writer of Lucifer, Hellblazer, X-Men)</cite>
    </blockquote>
    <blockquote class="panel testimonial3">
      "A fascinating development in software for script writers. Artists have been well served for comic art specific software for years with
      both and this could well turn into the writers best tool for writing comics. It outputs scripts in a format that's perfect for an artist
      to work from too, and that's a big plus in my eyes (panel counts at the top of the page? YES PLEASE)"
      <cite> — P. J. Holden (artist of Judge Dredd, Terminator/Robocop: Kill Human)</cite>
    </blockquote>
  </section>
</template>
<style lang="stylus" scoped>
@import '../../assets/css/vars'

.panels
  grid-template-areas \
    'heading      heading' \
    'testimonial1 testimonial2' \
    'testimonial1 testimonial3'

.panel
  display flex
  margin-left 0
  font-weight 200
  flex-direction column
  justify-content center

.testimonial1
  grid-area testimonial1
  padding 0
  justify-content flex-start

  > blockquote
    margin 1em

.testimonial2
  grid-area testimonial2

.testimonial3
  grid-area testimonial3

.testimonial-image
  width 100%

cite
  display block
  padding-left 1em

@media only screen and (max-width: $mediumMax)
  .panels
    grid-template-areas \
      'heading' \
      'testimonial1' \
      'testimonial2' \
      'testimonial3'
    grid-template-columns 1fr

  .testimonial3
    grid-area auto
</style>
