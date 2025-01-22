import dompurify from 'dompurify'

export const createMarkup = (dirty: string) => {
  return { __html: dompurify.sanitize(dirty)}
}
