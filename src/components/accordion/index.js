import {
  CAccordion,
  CAccordionItem,
  CAccordionHeader,
  CAccordionBody,
} from "@coreui/react"
import { Link } from 'react-router-dom'

const Accordion = ({article, details}) => {
  return (
    <CAccordion>
      <CAccordionItem itemKey={3}>
        <CAccordionHeader>{article.description || 'Description not available'}</CAccordionHeader>
        <CAccordionBody>
            {article.action_required}
          <div className="accordion-more-link">
            <Link to={'/regulations/view-regulation/article'} state={{article, details}}>More</Link>
          </div>
        </CAccordionBody>
      </CAccordionItem>
    </CAccordion>
  );
};

export default Accordion;
