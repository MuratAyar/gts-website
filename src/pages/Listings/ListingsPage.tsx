'use client'

import { useState } from 'react'
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from '@headlessui/react'
import {
  ChevronDownIcon,
  FunnelIcon,
  MinusIcon,
  PlusIcon,
  Squares2X2Icon,
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/20/solid'

import { Link } from 'react-router-dom'   

/* ---------- CRANE-MARKETPLACE CONFIG ---------- */
const sortOptions = [
  { name: 'Newest', current: true },
  { name: 'Price: Low → High', current: false },
  { name: 'Price: High → Low', current: false },
  { name: 'Capacity: High → Low', current: false },
  { name: 'Year: New → Old', current: false },
]

const subCategories = [
  { name: 'All-Terrain Cranes', href: '#all-terrain' },
  { name: 'Crawler Cranes', href: '#crawler' },
  { name: 'Tower Cranes', href: '#tower' },
  { name: 'Rough-Terrain Cranes', href: '#rough-terrain' },
  { name: 'Truck-Mounted / Boom Trucks', href: '#boom-truck' },
  { name: 'Carry-Deck / Industrial', href: '#carry-deck' },
  { name: 'Spare Parts & Attachments', href: '#parts' },
]

const filters = [
  {
    id: 'manufacturer',
    name: 'Manufacturer',
    options: [
      { value: 'liebherr', label: 'Liebherr', checked: false },
      { value: 'grove', label: 'Grove', checked: false },
      { value: 'terex-demag', label: 'Terex / Demag', checked: false },
      { value: 'tadano', label: 'Tadano', checked: false },
      { value: 'manitowoc', label: 'Manitowoc', checked: false },
      { value: 'kobelse', label: 'Kobelco', checked: false },
      { value: 'link-belt', label: 'Link-Belt', checked: false },
    ],
  },
  {
    id: 'capacity',
    name: 'Lifting Capacity',
    options: [
      { value: '0-50', label: '0-50 t', checked: false },
      { value: '50-150', label: '50-150 t', checked: false },
      { value: '150-300', label: '150-300 t', checked: false },
      { value: '300-600', label: '300-600 t', checked: false },
      { value: '600+', label: '600 t +', checked: false },
    ],
  },
  {
    id: 'year',
    name: 'Year of Manufacture',
    options: [
      { value: '2020-2025', label: '2020-2025', checked: false },
      { value: '2015-2019', label: '2015-2019', checked: false },
      { value: '2010-2014', label: '2010-2014', checked: false },
      { value: '2000-2009', label: '2000-2009', checked: false },
      { value: '1990-1999', label: '1990-1999', checked: false },
    ],
  },
  {
    id: 'condition',
    name: 'Condition',
    options: [
      { value: 'new', label: 'New', checked: false },
      { value: 'used', label: 'Used', checked: false },
      { value: 'for-rent', label: 'For Rent', checked: false },
    ],
  },
  {
    id: 'location',
    name: 'Location',
    options: [
      { value: 'europe', label: 'Europe', checked: false },
      { value: 'north-america', label: 'North America', checked: false },
      { value: 'asia', label: 'Asia', checked: false },
      { value: 'middle-east', label: 'Middle East', checked: false },
      { value: 'other', label: 'Other', checked: false },
    ],
  },
]

/* ---------- MOCK LISTINGS ---------- */

type Listing = {
  id: string
  title: string
  manufacturer: string
  capacity: string
  year: number
  price: string
  location: string
  image: string
}

const mockListings: Listing[] = [
  {
    id: '1',
    title: 'Liebherr LTM 1100-5.2',
    manufacturer: 'Liebherr',
    capacity: '100 t',
    year: 2021,
    price: '€ 899 000',
    location: 'Hamburg, DE',
    image:
      'https://images.unsplash.com/photo-1529655683826-aba9b3e77383?auto=format&fit=crop&w=800&q=60',
  },
  {
    id: '2',
    title: 'Grove GMK 4100L-1',
    manufacturer: 'Grove',
    capacity: '100 t',
    year: 2019,
    price: '€ 715 000',
    location: 'Rotterdam, NL',
    image:
      'https://images.unsplash.com/photo-1576689036665-3220c72126b1?auto=format&fit=crop&w=800&q=60',
  },
  {
    id: '3',
    title: 'Tadano GR-550XL (Rental)',
    manufacturer: 'Tadano',
    capacity: '55 t',
    year: 2015,
    price: 'from € 1 450 / day',
    location: 'Lyon, FR',
    image:
      'https://images.unsplash.com/photo-1601381023678-6ff450b734ba?auto=format&fit=crop&w=800&q=60',
  },
  {
    id: '4',
    title: 'Demag CC 3800-1',
    manufacturer: 'Terex / Demag',
    capacity: '650 t',
    year: 2018,
    price: '€ 2 490 000',
    location: 'Antwerp, BE',
    image:
      'https://images.unsplash.com/photo-1511958566-6cdb6e3c4a32?auto=format&fit=crop&w=800&q=60',
  },
  {
    id: '5',
    title: 'Kobelco CKE 1350',
    manufacturer: 'Kobelco',
    capacity: '135 t',
    year: 2014,
    price: '€ 495 000',
    location: 'Doha, QA',
    image:
      'https://images.unsplash.com/photo-1567960600194-c24efeaf19e7?auto=format&fit=crop&w=800&q=60',
  },
  {
    id: '6',
    title: 'Manitowoc MLC100-1',
    manufacturer: 'Manitowoc',
    capacity: '100 t',
    year: 2020,
    price: '€ 789 000',
    location: 'Houston, US',
    image:
      'https://images.unsplash.com/photo-1508898578281-774ac4893f34?auto=format&fit=crop&w=800&q=60',
  },
  {
    id: '7',
    title: 'Link-Belt RTC-8090 Series II',
    manufacturer: 'Link-Belt',
    capacity: '90 t',
    year: 2017,
    price: '€ 545 000',
    location: 'Warsaw, PL',
    image:
      'https://images.unsplash.com/photo-1528911642808-2fa4ac7a08ba?auto=format&fit=crop&w=800&q=60',
  },
  {
    id: '8',
    title: 'Liebherr 85 EC-B 5 (Spare Jib)',
    manufacturer: 'Liebherr',
    capacity: 'Accessory',
    year: 2023,
    price: '€ 29 000',
    location: 'Milan, IT',
    image:
      'https://images.unsplash.com/photo-1529161261061-cff70a1f6c9f?auto=format&fit=crop&w=800&q=60',
  },
  /* ---------- new items below ---------- */
  {
    id: '9',
    title: 'Terex RT 780',
    manufacturer: 'Terex',
    capacity: '80 t',
    year: 2016,
    price: '€ 469 000',
    location: 'Madrid, ES',
    image:
      'https://images.unsplash.com/photo-1516549322001-f2f2e6c6a6c4?auto=format&fit=crop&w=800&q=60',
  },
  {
    id: '10',
    title: 'Zoomlion ZCC2600',
    manufacturer: 'Zoomlion',
    capacity: '260 t',
    year: 2022,
    price: '€ 1 120 000',
    location: 'Istanbul, TR',
    image:
      'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=800&q=60',
  },
  {
    id: '11',
    title: 'Tadano ATF 220-5.1',
    manufacturer: 'Tadano',
    capacity: '220 t',
    year: 2018,
    price: '€ 1 390 000',
    location: 'Vienna, AT',
    image:
      'https://images.unsplash.com/photo-1574681164853-5fc4078b2164?auto=format&fit=crop&w=800&q=60',
  },
  {
    id: '12',
    title: 'Grove RT 770E',
    manufacturer: 'Grove',
    capacity: '65 t',
    year: 2014,
    price: '€ 365 000',
    location: 'Riyadh, SA',
    image:
      'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=800&q=60',
  },
  {
    id: '13',
    title: 'Spierings SK1265-AT6',
    manufacturer: 'Spierings',
    capacity: '10 t (mobile tower)',
    year: 2017,
    price: '€ 1 050 000',
    location: 'Brussels, BE',
    image:
      'https://images.unsplash.com/photo-1500340374022-452699c3a7da?auto=format&fit=crop&w=800&q=60',
  },
  {
    id: '14',
    title: 'Hitachi Sumitomo SCX 550-3',
    manufacturer: 'Hitachi',
    capacity: '55 t',
    year: 2019,
    price: '€ 615 000',
    location: 'Osaka, JP',
    image:
      'https://images.unsplash.com/photo-1517346696968-5bc644ae3dc2?auto=format&fit=crop&w=800&q=60',
  },
  {
    id: '15',
    title: 'Potain MR 608',
    manufacturer: 'Potain',
    capacity: '32 t',
    year: 2020,
    price: '€ 890 000',
    location: 'Dubai, AE',
    image:
      'https://images.unsplash.com/photo-1505739771474-59336cafd2ad?auto=format&fit=crop&w=800&q=60',
  },
  {
    id: '16',
    title: 'Liebherr LR 1600/2',
    manufacturer: 'Liebherr',
    capacity: '600 t',
    year: 2013,
    price: '€ 3 750 000',
    location: 'Oslo, NO',
    image:
      'https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=800&q=60',
  },
  {
    id: '17',
    title: 'Sumitomo SCX 1500-A3',
    manufacturer: 'Sumitomo',
    capacity: '150 t',
    year: 2016,
    price: '€ 745 000',
    location: 'Bangkok, TH',
    image:
      'https://images.unsplash.com/photo-1472746729194-a9da2a9f0dd4?auto=format&fit=crop&w=800&q=60',
  },
  {
    id: '18',
    title: 'Grove GMK 5250XL-1',
    manufacturer: 'Grove',
    capacity: '250 t',
    year: 2023,
    price: '€ 2 190 000',
    location: 'Manchester, UK',
    image:
      'https://images.unsplash.com/photo-1521464302789-3f8d26868923?auto=format&fit=crop&w=800&q=60',
  },
  {
    id: '19',
    title: 'Terex Comedil CTL 430-24',
    manufacturer: 'Terex',
    capacity: '24 t',
    year: 2018,
    price: '€ 640 000',
    location: 'Bologna, IT',
    image:
      'https://images.unsplash.com/photo-1534258945191-c15f45cb81f1?auto=format&fit=crop&w=800&q=60',
  },
  {
    id: '20',
    title: 'Boom Truck – Manitex 40124SHL',
    manufacturer: 'Manitex',
    capacity: '40 t',
    year: 2022,
    price: '€ 338 000',
    location: 'Chicago, US',
    image:
      'https://images.unsplash.com/photo-1536782556848-7e9edf624eaf?auto=format&fit=crop&w=800&q=60',
  },
]

/* ---------- CARD COMPONENT ---------- */
const slugify = (str: string) =>
  str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')

const ListingCard: React.FC<{ data: Listing; list?: boolean }> = ({
  data,
  list = false,
}) => (
  <Link
    to={`/search/${slugify(data.manufacturer)}/${data.id}`}
    className={
       list
         ? 'flex overflow-hidden rounded-lg border border-gray-200 shadow-sm transition hover:shadow-md'
         : 'flex flex-col overflow-hidden rounded-lg border border-gray-200 shadow-sm transition hover:shadow-md'
     }
   >
     <img
       src={data.image}
       alt={data.title}
      className={
        list
          ? 'h-32 w-48 flex-shrink-0 object-cover'
          : 'h-48 w-full object-cover'
      }
    />
    <div className="flex flex-1 flex-col gap-2 p-4">
      <h3 className="text-sm font-semibold text-gray-900">{data.title}</h3>
      <p className="text-xs text-gray-500">
        {data.manufacturer} • {data.capacity} • {data.year}
      </p>
      <p className="mt-auto text-base font-bold text-brand-500">{data.price}</p>
      <p className="text-xs text-gray-400">{data.location}</p>
    </div>
  </Link>
)

function classNames(...classes: (string | boolean | undefined | null)[]) {
  return classes.filter(Boolean).join(' ')
}

export default function ListingsPage() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const [gridView, setGridView] = useState(true) // 🔹 toggle state

  return (
    <div className="bg-white">
      {/* --------------------- MOBILE FILTER DIALOG --------------------- */}
      <Dialog
        open={mobileFiltersOpen}
        onClose={setMobileFiltersOpen}
        className="relative z-40 lg:hidden"
      >
        <DialogBackdrop className="fixed inset-0 bg-black/25" />
        <div className="fixed inset-0 flex">
          <DialogPanel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white pt-4 pb-6 shadow-xl">
            <div className="flex items-center justify-between px-4">
              <h2 className="text-lg font-medium text-gray-900">Filters</h2>
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(false)}
                className="rounded-md p-2 text-gray-400 hover:bg-gray-50 hover:text-gray-500"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="size-6" aria-hidden="true" />
              </button>
            </div>

            {/* ---- mobile filters form ---- */}
            <form className="mt-4 border-t border-gray-200">
              {/* categories */}
              <h3 className="sr-only">Categories</h3>
              <ul className="px-2 py-3 font-medium text-gray-900">
                {subCategories.map((category) => (
                  <li key={category.name}>
                    <a href={category.href} className="block px-2 py-3">
                      {category.name}
                    </a>
                  </li>
                ))}
              </ul>

              {/* dynamic filter sections */}
              {filters.map((section) => (
                <Disclosure
                  key={section.id}
                  as="div"
                  className="border-t border-gray-200 px-4 py-6"
                >
                  <h3 className="-mx-2 -my-3 flow-root">
                    <DisclosureButton className="group flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                      <span className="font-medium text-gray-900">
                        {section.name}
                      </span>
                      <span className="ml-6 flex items-center">
                        <PlusIcon
                          className="size-5 group-data-open:hidden"
                          aria-hidden="true"
                        />
                        <MinusIcon
                          className="size-5 group-not-data-open:hidden"
                          aria-hidden="true"
                        />
                      </span>
                    </DisclosureButton>
                  </h3>
                  <DisclosurePanel className="pt-6">
                    <div className="space-y-6">
                      {section.options.map((option, optionIdx) => (
                        <div key={option.value} className="flex gap-3">
                          <input
                            id={`filter-mobile-${section.id}-${optionIdx}`}
                            name={`${section.id}[]`}
                            defaultValue={option.value}
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-brand-500 focus:ring-brand-500"
                          />
                          <label
                            htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                            className="text-sm text-gray-500"
                          >
                            {option.label}
                          </label>
                        </div>
                      ))}
                    </div>
                  </DisclosurePanel>
                </Disclosure>
              ))}
            </form>
          </DialogPanel>
        </div>
      </Dialog>

      {/* --------------------- DESKTOP / COMMON CONTENT --------------------- */}
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top bar */}
        <div className="flex items-baseline justify-between border-b border-gray-200 pt-24 pb-6">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">
            Crane&nbsp;Listings
          </h1>

          <div className="flex items-center">
            {/* sort dropdown */}
            <Menu as="div" className="relative inline-block text-left">
              <MenuButton className="group inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900">
                Sort
                <ChevronDownIcon
                  className="-mr-1 ml-1 size-5 text-gray-400 group-hover:text-gray-500"
                  aria-hidden="true"
                />
              </MenuButton>

              <MenuItems className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                <div className="py-1">
                    {sortOptions.map((option) => (
                    <MenuItem key={option.name}>
                        {({ active: isActive }: { active: boolean }) => (
                        <a
                            href="#"
                            className={classNames(
                            option.current ? 'font-medium text-gray-900' : 'text-gray-500',
                            isActive && 'bg-gray-100',
                            'block px-4 py-2 text-sm'
                            )}
                        >
                            {option.name}
                        </a>
                        )}
                    </MenuItem>
                    ))}

                </div>
              </MenuItems>
            </Menu>

            {/* grid / list toggle */}
            <button
              type="button"
              onClick={() => setGridView((prev) => !prev)}
              className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7"
            >
              <span className="sr-only">
                {gridView ? 'Switch to list view' : 'Switch to grid view'}
              </span>
              {gridView ? (
                <Squares2X2Icon className="size-5" aria-hidden="true" />
              ) : (
                <Bars3Icon className="size-5" aria-hidden="true" />
              )}
            </button>

            {/* filter button (mobile) */}
            <button
              type="button"
              onClick={() => setMobileFiltersOpen(true)}
              className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
            >
              <span className="sr-only">Filters</span>
              <FunnelIcon className="size-5" aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Main grid */}
        <section aria-labelledby="listings-heading" className="pb-24 pt-6">
          <h2 id="listings-heading" className="sr-only">
            Available cranes
          </h2>

          <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
            {/* SIDE FILTERS (desktop) */}
            <form className="hidden lg:block">
              <h3 className="sr-only">Categories</h3>
              <ul className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900">
                {subCategories.map((category) => (
                  <li key={category.name}>
                    <a href={category.href}>{category.name}</a>
                  </li>
                ))}
              </ul>

              {filters.map((section) => (
                <Disclosure key={section.id} as="div" className="border-b border-gray-200 py-6">
                  <h3 className="-my-3 flow-root">
                    <DisclosureButton className="group flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                      <span className="font-medium text-gray-900">{section.name}</span>
                      <span className="ml-6 flex items-center">
                        <PlusIcon className="size-5 group-data-open:hidden" aria-hidden="true" />
                        <MinusIcon className="size-5 group-not-data-open:hidden" aria-hidden="true" />
                      </span>
                    </DisclosureButton>
                  </h3>
                  <DisclosurePanel className="pt-6">
                    <div className="space-y-4">
                      {section.options.map((option, optionIdx) => (
                        <div key={option.value} className="flex items-center gap-3">
                          <input
                            id={`filter-${section.id}-${optionIdx}`}
                            name={`${section.id}[]`}
                            defaultValue={option.value}
                            defaultChecked={option.checked}
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-brand-500 focus:ring-brand-500"
                          />
                          <label htmlFor={`filter-${section.id}-${optionIdx}`} className="text-sm text-gray-600">
                            {option.label}
                          </label>
                        </div>
                      ))}
                    </div>
                  </DisclosurePanel>
                </Disclosure>
              ))}
            </form>

            {/* LISTINGS GRID PLACEHOLDER */}
            <div className="lg:col-span-3">
              {/* TODO: render <ListingCard /> components here */}
                {gridView ? (
                /* grid cards */
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {mockListings.map((item) => (
                    <ListingCard key={item.id} data={item} />
                  ))}
                </div>
              ) : (
                /* list view */
                <div className="flex flex-col divide-y divide-gray-200 gap-3">
                  {mockListings.map((item) => (
                    <ListingCard key={item.id} data={item} list />
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
