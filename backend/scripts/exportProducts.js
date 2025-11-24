import { createClient } from '@supabase/supabase-js'
import fs from 'fs'

// ambil env
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
)

async function exportProducts() {
  // ambil semua data productDetail + relasi reviews
  const { data, error } = await supabase
    .from('product_detail')
    .select('*, reviews(*)')

  if (error) {
    console.error('❌ Error fetching products:', error)
    return
  }

  // convert array -> object (key = id) biar sesuai dengan seed.js lu
  const productsObject = {}
  for (const product of data) {
    productsObject[product.id] = product
  }

  // simpan ke file .cjs
  fs.writeFileSync(
    './productsDataTest.cjs',
    'module.exports = ' + JSON.stringify(productsObject, null, 2),
    'utf-8'
  )

  console.log(`✅ Exported ${data.length} products to productsData.cjs`)
}

exportProducts()
