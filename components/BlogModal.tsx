import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface BlogModalProps {
  isOpen: boolean
  onClose: () => void
  article: {
    title: string
    excerpt: string
    image: string
    category: string
    date: string
    readTime: string
    content: string
    author: string
    authorImage: string
  }
}

export default function BlogModal({ isOpen, onClose, article }: BlogModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-screen items-center justify-center p-4">
        {/* Backdrop */}
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm"
          onClick={onClose}
        />
        
        {/* Modal content */}
        <div className="relative w-full max-w-4xl bg-gray-900 border border-gray-800 rounded-xl shadow-2xl max-h-[90vh] overflow-y-auto">
          {/* Close button */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-4 z-10 text-gray-400 hover:text-white bg-gray-800/50 hover:bg-gray-800"
            onClick={onClose}
          >
            <X className="h-5 w-5" />
          </Button>
          
          {/* Article header image */}
          <div className="relative h-64 md:h-80">
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>
            
            {/* Category badge */}
            <div className="absolute top-6 left-6 bg-purple-600/90 text-white text-sm font-medium px-3 py-1 rounded">
              {article.category}
            </div>
            
            {/* Title overlay */}
            <div className="absolute bottom-6 left-6 right-6">
              <h1 className="text-2xl md:text-4xl font-bold text-white mb-2">
                {article.title}
              </h1>
              <p className="text-gray-300 text-sm md:text-base">
                {article.excerpt}
              </p>
            </div>
          </div>
          
          {/* Article content */}
          <div className="p-6 md:p-8">
            {/* Article metadata */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-8 pb-6 border-b border-gray-800">
              <div className="flex items-center gap-2">
                <Image
                  src={article.authorImage}
                  alt={article.author}
                  width={32}
                  height={32}
                  className="rounded-full"
                />
                <span>{article.author}</span>
              </div>
              <span>•</span>
              <span>{article.date}</span>
              <span>•</span>
              <span>{article.readTime}</span>
            </div>
            
            {/* Article body */}
            <div className="prose prose-invert prose-lg max-w-none">
              <div 
                className="text-gray-300 leading-relaxed space-y-4"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />
            </div>
            
            {/* Article footer */}
            <div className="mt-12 pt-8 border-t border-gray-800">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Image
                    src={article.authorImage}
                    alt={article.author}
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                  <div>
                    <p className="font-medium text-white">{article.author}</p>
                    <p className="text-sm text-gray-400">Founder & AI Researcher</p>
                  </div>
                </div>
                <Button
                  variant="outline"
                  className="border-gray-700 text-gray-300 hover:bg-gray-800"
                  onClick={onClose}
                >
                  Close Article
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}