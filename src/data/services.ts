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
    imageUrl: 'https://images.unsplash.com/photo-1755168648692-ef8937b7e63e?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    imageAlt: 'Roofers working on a residential roof',
  },
  {
    id: 'siding',
    name: 'Siding Installation & Repair',
    description: 'All siding types — repairs and new installation.',
    icon: LayoutPanelLeft,
    imageUrl: 'https://images.unsplash.com/photo-1546552356-3fae876a61ca?q=80&w=2676&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    imageAlt: 'House with new siding installation',
  },
  {
    id: 'painting',
    name: 'Interior & Exterior Painting',
    description: 'Residential painting services inside and out.',
    icon: PaintBucket,
    imageUrl: 'https://images.unsplash.com/photo-1634051808431-dda4b7450b72?q=80&w=2664&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    imageAlt: 'Painter applying exterior paint to a house',
  },
  {
    id: 'flooring',
    name: 'Flooring',
    description: 'Flooring installation and repair for any room.',
    icon: Layers,
    imageUrl: 'https://plus.unsplash.com/premium_photo-1683129707988-0eae4354f89f?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    imageAlt: 'Hardwood flooring installation in progress',
  },
  {
    id: 'decks',
    name: 'Deck Building & Repair',
    description: 'Custom decks built and repaired to last.',
    icon: Trees,
    imageUrl: 'https://images.unsplash.com/photo-1773430272778-28c224216811?q=80&w=926&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    imageAlt: 'Finished wooden deck on a residential home',
  },
]
