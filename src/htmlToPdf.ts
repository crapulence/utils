import html2canvas from 'html2canvas'
import { jsPDF } from 'jspdf'

export function htmlToPdf(element: HTMLElement): Promise<jsPDF> {
  return new Promise((resolve) => {
    html2canvas(element, {
      y: 300,
    }).then((canvas) => {
      const contentWidth = canvas.width
      const contentHeight = canvas.height
      const pageHeight = (contentWidth / 592.28) * 841.89
      let leftHeight = contentHeight - 100
      let position = 0
      const imgWidth = 595.28
      const imgHeight = (592.28 / contentWidth) * contentHeight
      const pageData = canvas.toDataURL('image/jpeg', 1.0)
      // eslint-disable-next-line new-cap
      const pdf = new jsPDF({
        unit: 'pt',
      })

      if (leftHeight < pageHeight) {
        pdf.addImage(pageData, 'JPEG', 0, 0, imgWidth, imgHeight)
      }
      else {
        while (leftHeight > 0) {
          pdf.addImage(pageData, 'JPEG', 0, position, imgWidth, imgHeight)
          leftHeight -= pageHeight
          position -= 841.89

          if (leftHeight > 0) {
            pdf.addPage()
          }
        }
      }

      resolve(pdf)
    })
  })
}
