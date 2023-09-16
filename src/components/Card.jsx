import { Card as BootstrapCard } from 'react-bootstrap';
import { Tags } from './Tags';

export function Card(props) {
    const { imageSrc, name, description, tags } = props;
    return (
      <BootstrapCard className='card'>
        <img src={imageSrc} alt={name} className="card-img-top" />
        <BootstrapCard.Body>
          <BootstrapCard.Title>{name}</BootstrapCard.Title>
          <BootstrapCard.Text>{description}</BootstrapCard.Text>
          <div className="tags-container">
            {tags.map((tag, index) => (
              <Tags key={index} backgroundColor={tag.backgroundColor} breed={tag.breed} />
            ))}
          </div>
        </BootstrapCard.Body>
      </BootstrapCard>
    );
  }
