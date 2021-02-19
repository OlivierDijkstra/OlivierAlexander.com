import { Button, Typography } from '@iseats/apollo';
import Layout from 'components/Layout/Layout';

function Page() {
    const { Title, Text, Paragraph } = Typography;

    return (
        <Layout>
            <Title inverse>Introduction.</Title>

            <Text inverse>Hello world.</Text>
        </Layout>
    );
}

export default Page;
