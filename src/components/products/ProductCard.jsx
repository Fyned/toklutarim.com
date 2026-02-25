import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { AppContext } from '@/context/AppContext';

const ProductCard = ({ product }) => {
    const { openQuoteModal } = useContext(AppContext);

    if (!product) return null;

    const handleQuoteClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        openQuoteModal(product.name);
    };

    return (
        <Link to={`/urunler/${product.slug}`} className="group block h-full">
            <Card className="overflow-hidden h-full flex flex-col transition-all duration-300 group-hover:shadow-xl group-hover:border-primary">
                <CardHeader className="p-0">
                    <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                        <img alt={product.alt} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" src={product.image} />
                    </div>
                </CardHeader>
                <CardContent className="p-6 flex-grow">
                    <h3 className="text-xl font-semibold mb-2 text-secondary">{product.name}</h3>
                    <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                        {product.features.map(feature => <li key={feature}>{feature}</li>)}
                    </ul>
                </CardContent>
                <CardFooter className="p-6 pt-0 flex justify-between items-center">
                    <span className="text-primary font-semibold flex items-center">
                        Detaylar <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                    <Button size="sm" onClick={handleQuoteClick}>Teklif Al</Button>
                </CardFooter>
            </Card>
        </Link>
    );
};

export default ProductCard;