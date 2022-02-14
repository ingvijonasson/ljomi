const links = document.querySelectorAll('a[data-analytics]')
for (let i = 0; i < links.length; i++) {
  links[i].addEventListener('click', handleLinkEvent)
  links[i].addEventListener('auxclick', handleLinkEvent)
}

function handleLinkEvent(event) {
  let link = event.target
  const middle = event.type === 'auxclick' && event.which === 2
  const click = event.type === 'click'
  while (
    link &&
    (typeof link.tagName === 'undefined' ||
      link.tagName.toLowerCase() !== 'a' ||
      !link.href)
  ) {
    link = link.parentNode
  }
  if (middle || click) {
    const attributes = link.getAttribute('data-analytics').split(/,(.+)/)
    const events = [
      JSON.parse(attributes[0]),
      JSON.parse(attributes[1] || '{}'),
    ]
    window.plausible(...events)
  }
  if (!link.target) {
    if (!(event.ctrlKey || event.metaKey || event.shiftKey) && click) {
      setTimeout(function () {
        location.href = link.href
      }, 150)
      event.preventDefault()
    }
  }
}
