'use client'

import { usePathname } from 'next/navigation'

export default function useBreadcrumbs() {
  const pathname = usePathname()

  // Ambil segmen mentah
  const rawParts = pathname.split('/').filter(Boolean)

  // Buang 'dp' DAN segmen ID yang ada tepat setelah 'dp'
  const pathParts = rawParts.filter((p, i) => p !== 'dp' && !(i > 0 && rawParts[i - 1] === 'dp'))

  return pathParts.map((part, index) => {
    const isLast = index === pathParts.length - 1
    const href = '/' + pathParts.slice(0, index + 1).join('/')

    // part = segmen asli (masih ada dash), label = versi human readable
    let label = decodeURIComponent(part).replace(/-/g, ' ')

    if (isLast) {
      // Pakai 'part' (yang masih ada '-') untuk memisahkan title & description
      const dashed = decodeURIComponent(part).split('-')
      if (dashed.length > 1) {
        const [title, ...rest] = dashed
        const description = rest.join(' ')
        label = `${capitalize(title)} - ${capitalizeSentence(description)}`
      } else {
        label = capitalize(label)
      }
    } else {
      label = capitalize(label)
    }

    return { label, href, isLast }
  })
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

// Kalau mau Title Case untuk deskripsi, ganti isi function ini.
function capitalizeSentence(str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
  // Atau Title Case:
  // return str.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
}
