import Link from 'next/link';
import { Button, Card } from 'semantic-ui-react';

const Index = ({ notes }) => {
  return (
    <div className="notes-container">
      <h1>Notes</h1>
      <div className="grid wrapper">
        
            <div>
              <Card>
                <Card.Content>
                  <Card.Header>
                    <Link href="#">
                      <a>test</a>
                    </Link>
                  </Card.Header>
                </Card.Content>
                <Card.Content extra>
                  <Link href="#">
                    <Button primary>View</Button>
                  </Link>
                  <Link href="#">
                    <Button primary>Edit</Button>
                  </Link>
                </Card.Content>
              </Card>
            </div>
         
      </div>
    </div>
  )
}

export default Index;