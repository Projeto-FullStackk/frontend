interface iSectionProps {
  title: string;
  form: JSX.Element;
}

const Section = ({ title, form }: iSectionProps) => {
  return (
    <section className="flex flex-col my-20 bg-gray-white px-12 py-11 rounded  w-4/5 sm:w-96">
      <h3 className="font-medium text-2xl font-lex">{title}</h3>
      {form}
    </section>
  );
};

export default Section;
