import React from 'react';
import { Star, ShoppingCart, Heart, Eye } from 'lucide-react';
import { Button } from './ui/button';
import { Separator } from './ui/separator';
import { Skeleton } from './ui/skeleton';
type Product = {
  id: number;
  name: string;
  price: number;
  discount?: number;
  rating: number;
  image: string;
  category: string;
};
const products: Product[] = [{
  id: 1,
  name: "Premium Wireless Headphones",
  price: 199.99,
  discount: 149.99,
  rating: 4.8,
  image: "/placeholder.svg",
  category: "Electronics"
}, {
  id: 2,
  name: "Ergonomic Office Chair",
  price: 249.99,
  rating: 4.5,
  image: "/placeholder.svg",
  category: "Furniture"
}, {
  id: 3,
  name: "Smart Fitness Watch",
  price: 179.99,
  discount: 129.99,
  rating: 4.7,
  image: "/placeholder.svg",
  category: "Wearables"
}, {
  id: 4,
  name: "Organic Cotton T-Shirt",
  price: 29.99,
  rating: 4.3,
  image: "/placeholder.svg",
  category: "Clothing"
}, {
  id: 5,
  name: "Stainless Steel Water Bottle",
  price: 24.99,
  rating: 4.6,
  image: "/placeholder.svg",
  category: "Accessories"
}, {
  id: 6,
  name: "Natural Bamboo Cutting Board",
  price: 34.99,
  discount: 27.99,
  rating: 4.4,
  image: "/placeholder.svg",
  category: "Home"
}];
const ProductCard = ({
  product
}: {
  product: Product;
}) => {
  return <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative">
        <img src={product.image} alt={product.name} className="w-full h-60 object-cover" />
        <div className="absolute top-3 right-3 flex flex-col gap-2">
          <button className="bg-white p-2 rounded-full hover:bg-gray-100 transition-colors">
            <Heart className="h-5 w-5 text-gray-600 hover:text-red-500" />
          </button>
          <button className="bg-white p-2 rounded-full hover:bg-gray-100 transition-colors">
            <Eye className="h-5 w-5 text-gray-600 hover:text-olive-500" />
          </button>
        </div>
        {product.discount && <div className="absolute top-3 left-3 bg-red-500 text-white text-xs px-2 py-1 rounded">
            SALE
          </div>}
      </div>
      <div className="p-4">
        <div className="text-xs text-gray-500 mb-1">{product.category}</div>
        <h3 className="font-semibold text-lg mb-1 line-clamp-2">{product.name}</h3>
        <div className="flex items-center gap-2 mb-3">
          <div className="flex">
            {[...Array(5)].map((_, i) => <Star key={i} className={`h-4 w-4 ${i < Math.floor(product.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} />)}
          </div>
          <span className="text-sm text-gray-500">({product.rating})</span>
        </div>
        <div className="flex items-center justify-between">
          <div>
            {product.discount ? <div className="flex items-center gap-2">
                <span className="font-semibold text-lg">${product.discount}</span>
                <span className="text-gray-500 line-through text-sm">${product.price}</span>
              </div> : <span className="font-semibold text-lg">${product.price}</span>}
          </div>
          <Button className="bg-olive-500 hover:bg-olive-600 text-white rounded-full p-2" size="icon">
            <ShoppingCart className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>;
};
const ProductListSection = () => {
  const categories = ["All", "Electronics", "Furniture", "Wearables", "Clothing", "Accessories", "Home"];
  const [selectedCategory, setSelectedCategory] = React.useState("All");
  const [isLoading, setIsLoading] = React.useState(false);
  const filteredProducts = selectedCategory === "All" ? products : products.filter(product => product.category === selectedCategory);
  return <section id="product-list-section" className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-white">Our Products</h2>
          <p className="text-xl max-w-2xl mx-auto text-gray-100">
            Discover our curated collection of high-quality products designed to enhance your lifestyle.
          </p>
        </div>

        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map(category => <button key={category} className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${selectedCategory === category ? "bg-olive-500 text-white" : "bg-white text-gray-700 hover:bg-olive-100"}`} onClick={() => setSelectedCategory(category)}>
                {category}
              </button>)}
          </div>
        </div>
        
        <Separator className="mb-8" />
        
        {isLoading ? <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => <div key={i} className="bg-white rounded-lg shadow overflow-hidden">
                <Skeleton className="w-full h-60" />
                <div className="p-4">
                  <Skeleton className="h-4 w-2/3 mb-2" />
                  <Skeleton className="h-6 w-full mb-3" />
                  <Skeleton className="h-4 w-1/3 mb-4" />
                  <div className="flex justify-between">
                    <Skeleton className="h-6 w-1/4" />
                    <Skeleton className="h-10 w-10 rounded-full" />
                  </div>
                </div>
              </div>)}
          </div> : <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map(product => <ProductCard key={product.id} product={product} />)}
          </div>}
        
        <div className="text-center mt-12">
          <Button className="bg-olive-500 hover:bg-olive-600 text-white">
            View All Products
          </Button>
        </div>
      </div>
    </section>;
};
export default ProductListSection;