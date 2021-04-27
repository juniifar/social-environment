import { Box, Container, Grid } from '@material-ui/core';
import { Helmet } from 'react-helmet';
// import ProductCard from 'src/components/product//ProductCard';
import ProjectTypeCard from 'src/components/project/ProjectTypeCard';
import projectTypes from 'src/__mocks__/projectTypes';

const ProjectType = () => (
  <>
    <Helmet>
      <title>Home | Material Kit</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >
      <Container maxWidth={false}>
        <Box sx={{ pt: 3 }}>
          <Grid
            container
            spacing={3}
          >
            {projectTypes.map((projectType) => (
              <Grid
                item
                key={projectType.id}
                lg={4}
                md={6}
                xs={12}
              >
                <ProjectTypeCard projectType={projectType} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  </>
);

export default ProjectType;
