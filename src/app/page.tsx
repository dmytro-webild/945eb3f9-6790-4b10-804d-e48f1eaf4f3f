"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import AboutMetric from '@/components/sections/about/AboutMetric';
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FeatureCardEight from '@/components/sections/feature/FeatureCardEight';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import MetricCardThree from '@/components/sections/metrics/MetricCardThree';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import TestimonialCardFive from '@/components/sections/testimonial/TestimonialCardFive';
import { Award, CheckCircle, Flame, MapPin, Repeat, Smile, Star } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="hover-bubble"
        defaultTextAnimation="background-highlight"
        borderRadius="pill"
        contentWidth="medium"
        sizing="mediumSizeLargeTitles"
        background="floatingGradient"
        cardStyle="inset"
        primaryButtonStyle="radial-glow"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="medium"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        {
          name: "Order",
          id: "product",
        },
        {
          name: "Our Story",
          id: "about",
        },
        {
          name: "Location",
          id: "contact",
        },
      ]}
      brandName="Loqma Chahia"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplit
      background={{
        variant: "gradient-bars",
      }}
      title="The Shawarma Everyone in Casablanca Waits For"
      description="Fresh bread. Authentic Palestinian recipe. Unmatched flavor. One product, perfected — and worth every minute."
      buttons={[
        {
          text: "Order Now - Skip the Line",
          href: "#product",
        },
        {
          text: "Find Us",
          href: "#contact",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/meat-doner-with-bread-table_140725-4812.jpg"
      imageAlt="Authentic Palestinian shawarma close-up"
      mediaAnimation="blur-reveal"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/mexican-food_23-2148024823.jpg",
          alt: "Customer 1",
        },
        {
          src: "http://img.b2bpic.net/free-photo/close-up-hands-holding-tasty-taco_23-2148750441.jpg",
          alt: "Customer 2",
        },
        {
          src: "http://img.b2bpic.net/free-photo/hands-preparing-burrito_23-2148131366.jpg",
          alt: "Customer 3",
        },
        {
          src: "http://img.b2bpic.net/free-photo/side-view-hands-holding-doner-filled-with-chicken-vegetables-pickles-sauce-wrapped-lavash_140725-12898.jpg",
          alt: "Customer 4",
        },
        {
          src: "http://img.b2bpic.net/free-photo/woman-films-vlog-praising-bio-local-shop_482257-81629.jpg",
          alt: "Customer 5",
        },
      ]}
      avatarText="Join 50k+ happy foodies"
      marqueeItems={[
        {
          type: "text-icon",
          text: "100% Authentic",
          icon: CheckCircle,
        },
        {
          type: "text-icon",
          text: "Fresh Bread Daily",
          icon: Flame,
        },
        {
          type: "text-icon",
          text: "Hand-Carved",
          icon: Flame,
        },
        {
          type: "text-icon",
          text: "Palestinian Heritage",
          icon: Award,
        },
        {
          type: "text-icon",
          text: "Casablanca Favorite",
          icon: MapPin,
        },
      ]}
    />
  </div>

  <div id="testimonial" data-section="testimonial">
      <TestimonialCardFive
      textboxLayout="split"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          name: "Sarah Johnson",
          date: "Oct 2023",
          title: "Regular Customer",
          quote: "Best chicken shawarma I have ever tried in my life.",
          tag: "Authentic",
          avatarSrc: "http://img.b2bpic.net/free-photo/person-indian-origin-having-fun_23-2150285278.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/meat-doner-with-bread-table_140725-4812.jpg",
          imageAlt: "customer eating shawarma sandwich",
        },
        {
          id: "2",
          name: "Michael Chen",
          date: "Sept 2023",
          title: "Foodie",
          quote: "Une explosion de saveurs, simply unmatched quality.",
          tag: "Delicious",
          avatarSrc: "http://img.b2bpic.net/free-photo/man-eating-laughing-restaurant_23-2148006702.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/woman-having-fun-food-festival_23-2149500432.jpg",
          imageAlt: "customer eating shawarma sandwich",
        },
        {
          id: "3",
          name: "Emily Rodriguez",
          date: "Aug 2023",
          title: "Local",
          quote: "Pain maison incroyable! The texture is just perfect.",
          tag: "Homemade",
          avatarSrc: "http://img.b2bpic.net/free-photo/close-up-woman-holding-kebab_23-2148773544.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/delicious-gulas-dish-assortment_23-2149072591.jpg",
          imageAlt: "customer eating shawarma sandwich",
        },
        {
          id: "4",
          name: "David Kim",
          date: "July 2023",
          title: "Tourist",
          quote: "Très bon et pas cher. A must-visit place in Casablanca.",
          tag: "Great Value",
          avatarSrc: "http://img.b2bpic.net/free-photo/front-view-delicious-sliced-shaurma-meat-sandwich-with-lemon-greens-dark-space_140725-95193.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/candy-girl-kitchen_1150-10006.jpg",
          imageAlt: "customer eating shawarma sandwich",
        },
        {
          id: "5",
          name: "Amira B.",
          date: "June 2023",
          title: "Loyal Fan",
          quote: "Every single visit feels consistent and satisfying.",
          tag: "Loyalty",
          avatarSrc: "http://img.b2bpic.net/free-photo/sandwich-lavash-wooden-platter_114579-3506.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/grilled-chicken-breast-served-with-bell-peppers-cherry-tomato-olives-1_140725-8590.jpg",
          imageAlt: "customer eating shawarma sandwich",
        },
      ]}
      title="Loved by Hundreds in Casablanca"
      description="People line up for a reason. Experience the flavor that has captured the heart of the city."
    />
  </div>

  <div id="product" data-section="product">
      <ProductCardThree
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={true}
      products={[
        {
          id: "1",
          name: "Signature Chicken Wrap",
          price: "30 DH",
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-delicious-sliced-shaurma-meat-sandwich-with-lemon-greens-dark-space_140725-95193.jpg",
        },
        {
          id: "2",
          name: "Extra Meat Portion",
          price: "15 DH",
          imageSrc: "http://img.b2bpic.net/free-photo/high-angle-arrangement-with-delicious-mexican-food_23-2148329073.jpg",
        },
        {
          id: "3",
          name: "Palestinian Side Salad",
          price: "10 DH",
          imageSrc: "http://img.b2bpic.net/free-photo/wrap-salad-roll_1339-4104.jpg",
        },
        {
          id: "4",
          name: "Fresh Homemade Bread",
          price: "5 DH",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-delicious-meat-sandwich-made-meat-grilled-spit-with-vegetables-seasonings-blue-desk-burger-meat-meal-lunch-food-sandwich_140725-64513.jpg",
        },
        {
          id: "5",
          name: "Traditional Spicy Sauce",
          price: "3 DH",
          imageSrc: "http://img.b2bpic.net/free-photo/tasty-burrito_23-2148131371.jpg",
        },
        {
          id: "6",
          name: "Special Garlic Dip",
          price: "3 DH",
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-chicken-roll-grilled-chicken-lettuce-cucumber-tomato-mayo-pita_141793-4849.jpg",
        },
      ]}
      title="One Product. Perfected."
      description="We don't do everything. We do one thing — and we do it better than anyone. Experience the essence of authentic Palestinian craftsmanship."
    />
  </div>

  <div id="feature" data-section="feature">
      <FeatureCardEight
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        {
          title: "Authentic Recipe",
          description: "100% traditional Palestinian spices and techniques.",
          imageSrc: "http://img.b2bpic.net/free-photo/sandwich-lavash-wooden-platter_114579-3506.jpg",
          imageAlt: "Spiced chicken",
        },
        {
          title: "Fresh Homemade Bread",
          description: "Baked from scratch in-house daily for every single order.",
          imageSrc: "http://img.b2bpic.net/free-photo/candy-girl-kitchen_1150-10006.jpg",
          imageAlt: "Fresh flatbread",
        },
        {
          title: "Fast, Ritual Service",
          description: "Experience efficient service without compromising the quality of your meal.",
          imageSrc: "http://img.b2bpic.net/free-photo/grilled-chicken-breast-served-with-bell-peppers-cherry-tomato-olives-1_140725-8590.jpg",
          imageAlt: "Grill station",
        },
      ]}
      title="Why Loqma Chahia?"
      description="Excellence is in the details, from the first slice of meat to the final warm bite of our fresh bread."
    />
  </div>

  <div id="about" data-section="about">
      <AboutMetric
      useInvertedBackground={true}
      title="It's Not Just Food. It's A Ritual."
      metrics={[
        {
          label: "Years of Tradition",
          value: "10+",
          icon: Award,
        },
        {
          label: "Orders Daily",
          value: "500+",
          icon: Flame,
        },
        {
          label: "Authentic Recipes",
          value: "100%",
          icon: CheckCircle,
        },
      ]}
      metricsAnimation="slide-up"
    />
  </div>

  <div id="metric" data-section="metric">
      <MetricCardThree
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      metrics={[
        {
          id: "m1",
          title: "Happy Customers",
          value: "50k+",
          icon: Smile,
        },
        {
          id: "m2",
          title: "Authenticity Score",
          value: "10/10",
          icon: Star,
        },
        {
          id: "m3",
          title: "Repeat Orders",
          value: "85%",
          icon: Repeat,
        },
      ]}
      title="By The Numbers"
      description="The proof is in the results — consistency, loyalty, and thousands of satisfied appetites."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
      useInvertedBackground={true}
      background={{
        variant: "plain",
      }}
      tag="Skip The Line"
      title="Find Us & Pre-Order Now"
      description="In the heart of Casablanca. Follow the crowd, or skip it entirely by ordering ahead."
      buttons={[
        {
          text: "Pre-Order Now",
          href: "#product",
        },
        {
          text: "Find Us on Maps",
          href: "https://maps.google.com",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoEmphasis
      columns={[
        {
          items: [
            {
              label: "About Us",
              href: "#about",
            },
            {
              label: "Menu",
              href: "#product",
            },
            {
              label: "Location",
              href: "#contact",
            },
          ],
        },
        {
          items: [
            {
              label: "Instagram",
              href: "#",
            },
            {
              label: "Privacy Policy",
              href: "#",
            },
            {
              label: "Terms of Service",
              href: "#",
            },
          ],
        },
      ]}
      logoText="Loqma Chahia"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
