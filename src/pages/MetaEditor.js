import { Helmet } from 'react-helmet';
import {
  Box,
  Container,
} from '@material-ui/core';
import MetaEditorFormInput from 'src/components/metaEditor/MetaEditorFormInput';

const MetaEditor = () => (
  <>
    <Helmet>
      <title>Meta Editor | Material Kit</title>
    </Helmet>
    <Box sx={{
      backgroundColor: 'background.default',
      minHeight: '100%',
      py: 3
    }}
    >
      <Container maxWidth={false}>
        <MetaEditorFormInput />
      </Container>
    </Box>
  </>
);

export default MetaEditor;
