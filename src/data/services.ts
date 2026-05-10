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
    name: 'Roof Replacement & Repair',
    description: 'Full roof work from minor repairs to complete replacement.',
    icon: HardHat,
    imageUrl: '/services/roofing.jpg',
    imageAlt: 'Roofers working on a residential roof',
  },
  {
    id: 'siding',
    name: 'Siding Installation & Repair',
    description: 'All siding types — repairs and new installation.',
    icon: LayoutPanelLeft,
    imageUrl: '/services/siding.jpg',
    imageAlt: 'House with new siding installation',
  },
  {
    id: 'painting',
    name: 'Interior & Exterior Painting',
    description: 'Residential painting services inside and out.',
    icon: PaintBucket,
    imageUrl: '/services/painting.jpg',
    imageAlt: 'Painter applying exterior paint to a house',
  },
  {
    id: 'flooring',
    name: 'Flooring',
    description: 'Flooring installation and repair for any room.',
    icon: Layers,
    imageUrl: '/services/flooring.jpg',
    imageAlt: 'Hardwood flooring installation in progress',
  },
  {
    id: 'decks',
    name: 'Deck Building & Repair',
    description: 'Custom decks built and repaired to last.',
    icon: Trees,
    imageUrl: '/services/decks.jpg',
    imageAlt: 'Finished wooden deck on a residential home',
  },
]
