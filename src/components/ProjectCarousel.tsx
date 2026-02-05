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
      py: 4,
      '.swiper-button-next, .swiper-button-prev': { color: 'primary.main' },
      '.swiper-pagination-bullet-active': { bgcolor: 'primary.main' }
    }}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        style={{ paddingTop: 8, minHeight: '300px'}}
      >
        {projects.map((repo) => (
          <SwiperSlide key={repo.id} style={{ height: 'auto' }}>
            <ProjectCard repo={repo} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};