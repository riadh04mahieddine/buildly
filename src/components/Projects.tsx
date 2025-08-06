'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { ArrowLeft, ArrowRight, Clock, Users, Zap } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const projects = [
  {
    quote: 'Buildly a transformé notre vision en une application mobile performante en un temps record.',
    author: 'Karim Al-Jamil',
    company: 'CEO, Kard',
    metrics: [
      { icon: <Clock size={24} />, text: '12 semaines de développement' },
      { icon: <Users size={24} />, text: '10k+ utilisateurs actifs' },
    ],
    type: 'App Mobile',
  },
  {
    quote: 'Leur expertise SaaS nous a permis de lancer une plateforme robuste qui a immédiatement séduit nos clients.',
    author: 'Léa Dubois',
    company: 'Fondatrice, Ordo',
    metrics: [
      { icon: <Zap size={24} />, text: 'Lancement en 3 mois' },
      { icon: <Users size={24} />, text: '500+ entreprises clientes' },
    ],
    type: 'SaaS B2B',
  },
  {
    quote: 'Notre nouvelle application a simplifié la réservation pour des milliers d\'utilisateurs.',
    author: 'Javier Fernandez',
    company: 'Fondateur, Nomad',
    metrics: [
      { icon: <Clock size={24} />, text: 'MVP en 10 semaines' },
      { icon: <Users size={24} />, text: '25k+ réservations' },
    ],
    type: 'App Mobile',
  },
  {
    quote: 'Notre application de méditation est fluide, intuitive et a été adoptée massivement.',
    author: 'Klaus Richter',
    company: 'Co-fondatrice, Clarity',
    metrics: [
      { icon: <Clock size={24} />, text: '16 semaines de A à Z' },
      { icon: <Users size={24} />, text: '50k+ téléchargements' },
    ],
    type: 'App Mobile',
  },
  {
    quote: 'La plateforme de gestion de projet livrée est un véritable game-changer pour notre productivité.',
    author: 'Dmitri Volkov',
    company: 'COO, Focal',
    metrics: [
      { icon: <Zap size={24} />, text: 'Processus optimisé' },
      { icon: <Users size={24} />, text: 'Équipes plus efficaces' },
    ],
    type: 'SaaS Interne',
  },
  {
    quote: 'Un CRM sur-mesure qui a centralisé toutes nos opérations client.',
    author: 'Sofia Rossi',
    company: 'Directrice Commerciale, Pipeline',
    metrics: [
      { icon: <Clock size={24} />, text: '4 mois de développement' },
      { icon: <Users size={24} />, text: '100% d\'adoption interne' },
    ],
    type: 'SaaS B2B',
  },
  {
    quote: 'L\'application sociale que nous avons imaginée a pris vie grâce à leur talent.',
    author: 'Youssef Hamza',
    company: 'CEO, Echo',
    metrics: [
      { icon: <Zap size={24} />, text: 'Engagement utilisateur record' },
      { icon: <Users size={24} />, text: '100k+ interactions/jour' },
    ],
    type: 'App Mobile',
  },
  {
    quote: 'Un SaaS de data-visualisation puissant qui a séduit nos investisseurs et nos clients.',
    author: 'Anja Schmidt',
    company: 'CEO, Lumen',
    metrics: [
      { icon: <Zap size={24} />, text: 'Levée de fonds de 2M€' },
      { icon: <Users size={24} />, text: 'Analyse de 1To de données' },
    ],
    type: 'SaaS B2B',
  },
  {
    quote: 'Notre SaaS de logistique est devenu le pilier de notre croissance.',
    author: 'Elena Petrova',
    company: 'CEO, Cortex Logistique',
    metrics: [
      { icon: <Zap size={24} />, text: 'ROI atteint en 6 mois' },
      { icon: <Users size={24} />, text: 'Gestion de 1M+ colis' },
    ],
    type: 'SaaS B2B',
  },
  {
    quote: 'Une application de fitness qui motive et engage nos utilisateurs au quotidien.',
    author: 'Marc Dubois',
    company: 'Co-fondatrice, Synergie Fit',
    metrics: [
      { icon: <Clock size={24} />, text: '10 semaines pour la V1' },
      { icon: <Users size={24} />, text: 'Taux de rétention de 70%' },
    ],
    type: 'App Mobile',
  },
];

interface Metric {
  icon: React.ReactNode;
  text: string;
}

interface Project {
  quote: string;
  author: string;
  company: string;
  metrics: Metric[];
  type: string;
}

const ProjectCard = ({ project }: { project: Project }) => (
  <div className="bg-white p-8 md:p-12 border-2 border-black h-full flex flex-col justify-between rounded-lg relative overflow-hidden">
    <span className={`absolute top-0 right-0 px-4 py-1 text-sm font-bold border-b-2 border-l-2 border-black ${project.type.includes('App') ? 'bg-red-500 text-white' : 'bg-yellow-400 text-black'}`}>
      {project.type}
    </span>
    <div>
      <p className="text-xl md:text-2xl font-medium leading-relaxed mt-4">“{project.quote}”</p>
      <div className="mt-6">
        <p className="font-bold text-lg">{project.author}</p>
        <p className="text-gray-600">{project.company}</p>
      </div>
    </div>
    <div className="mt-8 pt-6 border-t-2 border-gray-100 flex flex-wrap gap-6">
      {project.metrics.map((metric: Metric, index: number) => (
        <div key={index} className="flex items-center gap-3">
          <div className="text-red-500">{metric.icon}</div>
          <div>
            <p className="font-bold">{metric.text.split(' ')[0]}</p>
            <p className="text-gray-600 text-sm">{metric.text.split(' ').slice(1).join(' ')}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const Projects = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">Nos réalisations</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-700">Nous sommes fiers de transformer des idées ambitieuses en produits à succès.</p>
        </div>
        
        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }}
            pagination={{ clickable: true, el: '.swiper-pagination-custom' }}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="!pb-16"
          >
            {projects.map((project: Project, index: number) => (
              <SwiperSlide key={index}>
                <ProjectCard project={project} />
              </SwiperSlide>
            ))}
          </Swiper>
          
          <div className="flex justify-center items-center gap-4 mt-8">
            <button className="swiper-button-prev-custom p-3 border-2 border-black bg-white hover:bg-yellow-400 transition-colors rounded-full shadow-[4px_4px_0_#000] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5">
              <ArrowLeft />
            </button>
            <div className="swiper-pagination-custom flex gap-2"></div>
            <button className="swiper-button-next-custom p-3 border-2 border-black bg-white hover:bg-yellow-400 transition-colors rounded-full shadow-[4px_4px_0_#000] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5">
              <ArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
