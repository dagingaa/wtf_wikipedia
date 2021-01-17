const i18n = require('../_data/i18n')
const alt_disambig = require('./_disambig')
const inTitle = new RegExp('. \\((' + i18n.disambig_titles.join('|') + ')\\)$', 'i')
const i18n_templates = i18n.disambig_templates.reduce((h, str) => {
  h[str] = true
  return h
}, {})

/**
 * Parses the wikitext to find out if this page is a disambiguation
 *
 * @private
 * @param {Document} doc the document that is examined
 * @returns {boolean} an indication if the document is a disambiguation page
 */
const isDisambig = function (doc) {
  // check for a {{disambig}} template
  let templates = doc.templates()
  let found = templates.find((obj) => {
    return alt_disambig.hasOwnProperty(obj.template) || i18n_templates.hasOwnProperty(obj.template)
  })
  if (found) {
    return true
  }
  // check for (disambiguation) in title
  let title = doc.title()
  if (title && inTitle.test(title) === true) {
    return true
  }
  //try 'may refer to' on first line for en-wiki?
  let s = doc.sentences()[0]
  if (s) {
    let firstLine = s.text()
    if (firstLine !== null && firstLine[0]) {
      if (/. may refer to\b/i.test(firstLine) === true) {
        return true
      }
    }
  }
  return false
}

module.exports = isDisambig
