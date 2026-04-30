import {
  HardHat,
  PaintBucket,
  LayoutPanelLeft,
  Layers,
  Trees,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export interface Service {
  id: string
  name: string
  description: string
  icon: LucideIcon
  imageUrl: string
  imageAlt: string
}

export const services: Service[] = [
  {
    id: 'roofing',
    name: 'Roof Repair & Replacement',
    description: 'Full roof work from minor repairs to complete replacement.',
    icon: HardHat,
    imageUrl: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Roofers working on a residential roof',
  },
  {
    id: 'siding',
    name: 'Siding Repair & Installation',
    description: 'All siding types — repairs and new installation.',
    icon: LayoutPanelLeft,
    imageUrl: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'House with new siding installation',
  },
  {
    id: 'painting',
    name: 'Interior & Exterior Painting',
    description: 'Residential painting services inside and out.',
    icon: PaintBucket,
    imageUrl: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Painter applying exterior paint to a house',
  },
  {
    id: 'flooring',
    name: 'Flooring',
    description: 'Flooring installation and repair for any room.',
    icon: Layers,
    imageUrl: 'https://images.unsplash.com/photo-1558618047-f4e60c43d9b5?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Hardwood flooring installation in progress',
  },
  {
    id: 'decks',
    name: 'Deck Building & Repair',
    description: 'Custom decks built and repaired to last.',
    icon: Trees,
    imageUrl: 'https://images.unsplash.com/photo-1591825729269-caeb344f6df2?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Finished wooden deck on a residential home',
  },
]
