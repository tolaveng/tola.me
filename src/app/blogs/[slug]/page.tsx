'use client'

export default function SlugPage({ params }: { params: { slug: string } }) {
    return (
      <main>
        <div>
            This is a slug page {params.slug}
        </div>
      </main>
    )
  }