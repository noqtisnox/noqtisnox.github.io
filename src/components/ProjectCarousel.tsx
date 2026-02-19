import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Box } from '@mui/material';
import { ProjectCard } from '@components/ProjectCard';
import { type GitHubRepo } from '@data/projects';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export const ProjectCarousel = ({ projects }: { projects: GitHubRepo[] }) => {
  return (
    <Box sx={{ 
      py: { xs: 8, md: 4 }, 
      width: '100%',
      maxWidth: '100vw',
      overflow: 'hidden',
      position: 'relative',
      '.swiper-button-next, .swiper-button-prev': { 
        color: 'primary.main',
        display: { xs: 'none', md: 'flex' } 
      },
      '.swiper-pagination': {
        bottom: '0px !important',
      },
      '.swiper-pagination-bullet-active': { bgcolor: 'primary.main' },
      '.swiper': {
        overflow: 'visible',
        pb: 8, 
        px: { xs: 2, md: 0 }
      }
    }}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={16}
        slidesPerView={1}
        centeredSlides={true}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        breakpoints={{
          320: {
            slidesPerView: 1.05,
            spaceBetween: 12
          },
          640: { 
            slidesPerView: 2,
            centeredSlides: false,
            spaceBetween: 30 
          },
          1024: { 
            slidesPerView: 3,
            centeredSlides: false,
            spaceBetween: 30 
          },
        }}
        style={{ paddingTop: 8, minHeight: '300px' }}
      >
        {projects.map((repo) => (
          <SwiperSlide key={repo.id} style={{ height: 'auto', display: 'flex' }}>
            <ProjectCard repo={repo} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};