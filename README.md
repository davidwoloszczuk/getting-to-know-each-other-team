# getting-to-know-each-other-team-website

Our scrum team's portfolio site: a team photo (image map), a member list linking to each
member's Getting To Know Each Other site, and an assignment portfolio. It is plain HTML, CSS,
and JavaScript with no build step, hosted on Azure Static Web Apps.

## Files

- `index.html`: the page
- `css/styles.css`: styles (light and dark mode)
- `js/main.js`: rescales the image map when the photo resizes and highlights the hovered member
- `img/team-photo.jpg`: team photo (1200 × 900)

## Each member: update your own section

In `index.html`, find the two blocks with your name:

- `<!-- BEGIN <Name>: image map -->`: replace `#TODO-<name>-url` in `href` with the URL of
  your Getting To Know Each Other site.
- `<!-- BEGIN <Name>: member info -->`: put the same URL in `href` and check your role.

Commit and push your own change so the GitHub history shows each member's update.
