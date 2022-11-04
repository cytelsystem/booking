import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import Layout from './Layout';

const Highlights = ({ highlights }) => {
   return (
      <section className="db-apartment-highlights">
         <SectionTitle underline>Qué tienes que saber</SectionTitle>
         <Layout>
            {highlights.map(highlight => (
               <div key={highlight.title} className="db-highlight">
                  <h3>{highlight.title}</h3>
                  <ul>
                     {highlight.items.map(item => (
                        <li key={item}>
                           <p>{item}</p>
                        </li>
                     ))}
                  </ul>
               </div>
            ))}
         </Layout>
      </section>
   );
};

export default Highlights;
