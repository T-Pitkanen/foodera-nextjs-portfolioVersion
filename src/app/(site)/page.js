import Hero from '@/components/hero/hero';
import About from '@/components/about/about';
import Affiliates from '@/components/affiliates/affiliates';
import Products from '@/components/products/products';
import Reviews from '@/components/reviews/reviews';
import Faqs from '@/components/questions/accordions';
import UserForm from '@/components/userform/userForm';
import Video from '@/components/video/video';

export default function Page() {
	return (
		<div>
			<Hero />
			<Affiliates />
			<About />
			<Video />
			<Products />
			<Reviews />
			<Faqs />
			<Video />
			<UserForm />
		</div>
	);
}
