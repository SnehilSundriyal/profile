import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import { Newsletter } from '@/components/Newsletter'
import { Photos } from '@/components/Photos'
import { Resume } from '@/components/Resume'
import { SocialLinks } from '@/components/SocialLink'
import { FlipWords } from '@/components/ui/flip-words'
import { getAllArticles } from '@/lib/articles'
import { formatDate } from '@/lib/formatDate'

import image1 from '../../public/image-1.jpg'
import image2 from '../../public/image-2.jpg'
import image3 from '../../public/image-3.jpg'
import image4 from '../../public/image-4.jpg'
import image5 from '../../public/image-5.jpg'

const roles = ['obsessive web developer.', 'engineer.', 'amateur musician.']
const photos = [image1, image2, image3, image4, image5]

function Article({ article }) {
  return (
    <Card as="article">
      <Card.Title href={`/articles/${article.slug}`}>{article.title}</Card.Title>
      <Card.Eyebrow as="time" dateTime={article.date} decorate>
        {formatDate(article.date)}
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
      <Card.Cta>Read article</Card.Cta>
    </Card>
  )
}

export default async function Home() {
  let articles = (await getAllArticles()).slice(0, 4)

  return (
    <>
      <Container className="mt-9">
        <div className="max-w-4xl">
          <h1 className="grid grid-cols-1 text-4xl font-bold tracking-tight text-ink sm:grid-cols-2 sm:text-5xl">
            <div className="col-span-1 ml-2 sm:col-span-2">Hey, I am Snehil and I am an</div>
            <div className="col-span-1 sm:col-span-2">
              <FlipWords duration={2000} words={roles} />
            </div>
          </h1>
          <p className="mt-6 text-base text-ink-muted">
            I’m a software developer, born and raised in Chandigarh, India. I’m a
            student at BITS Pilani, Pilani, Rajasthan, India (IN). I am currently
            pursuing an M.Sc. in Physics and B.E. in Electronics and Electrical
            Engineering.
          </p>
          <SocialLinks className="mt-6" />
        </div>
      </Container>

      <Photos images={photos} />

      <Container className="mt-10 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Newsletter />
            <Resume />
          </div>
        </div>
      </Container>
    </>
  )
}
