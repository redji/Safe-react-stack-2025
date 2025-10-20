import { Routes, Route } from 'react-router-dom'

import { Layout } from '@/components/Layout'
import { NotFound } from '@/components/NotFound'
import { About } from '@/features/About'
import { Home } from '@/features/Home'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Layout>
  )
}

export default App
