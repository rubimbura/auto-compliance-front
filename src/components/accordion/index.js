import {
  CAccordion,
  CAccordionItem,
  CAccordionHeader,
  CAccordionBody,
} from "@coreui/react";

const Accordion = () => {
  return (
    <CAccordion>
      <CAccordionItem itemKey={3}>
        <CAccordionHeader>Article 1 (Article description)</CAccordionHeader>
        <CAccordionBody>
            Action Required
          <div className="accordion-more-link">
            <a href="/regulations/view-regulation/article">more</a>
          </div>
        </CAccordionBody>
      </CAccordionItem>
    </CAccordion>
  );
};

export default Accordion;
