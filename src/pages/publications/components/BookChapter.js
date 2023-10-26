import AEoMTL from '../../../assets/images/books/AEoMTL.webp';
import CSintRoAM from '../../../assets/images/books/CSintRoAM.webp';
import MFMaPP from '../../../assets/images/books/MFMaPP.webp';
import NNSMP from '../../../assets/images/books/NNSMP.webp';
import AoLiM from '../../../assets/images/books/AoLiM.webp';
import AaSM from '../../../assets/images/books/AaSM.webp';
import './bookChapter.css';

function BookChapter() {
  return <>
    <table className="table table-bordered">
      <thead>
        <tr>
          <th scope="col">Book Chapter</th>
          <th scope="col">Book</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            S. K. Nayak, A. N. Jinoop, S. Shiva, C. P. Paul <b>(2022)</b>. Laser Additive Manufacturing of Nickel Superalloys for Aerospace Applications. In:
            V. Sharma, & P.M. Pandey, (Eds.). (2022). Additive and Subtractive Manufacturing Processes: Principles and Applications (1st ed.). CRC Press. <a href="https://doi.org/10.1201/9781003327394">https://doi.org/10.1201/9781003327394</a>
          </td>
          <td>
            <img src={AaSM} alt="book" className="book-image" />
          </td>
        </tr>
        <tr>
          <td>
            A.N. Jinoop, S. Shiva, C.P. Paul <b>(2022)</b>. Laser-Based Post-processing of Metal Additive
            Manufactured Components. In: J. Radhakrishnan, S. Pathak. (eds) Advanced Engineering of
            Materials Through Lasers. Advances in Material Research and Technology. Springer, Cham.
            <a href="https://doi.org/10.1007/978-3-031-03830-3_7" target="_blank" rel="noreferrer">https://doi.org/10.1007/978-3-031-03830-3_7</a>
          </td>
          <td>
            <img src={AEoMTL} alt="book" className="book-image" />
          </td>
        </tr>
        <tr>
          <td>
            H. Kumar, C. Kumar, S.G.K. Manikandan, M. Kamaraj, S. Shiva. <b>(2022)</b>. Laser Re-
            Melting of Atmospheric Plasma Sprayed High Entropy Alloy. In: J. Radhakrishnan, S. Pathak (eds) Advanced Engineering of Materials Through Lasers. Advances in Material Research
            and Technology. Springer, Cham. <a href="https://doi.org/10.1007/978-3-031-03830-3_5" target="_blank" rel="noreferrer">https://doi.org/10.1007/978-3-031-03830-3_5</a>
          </td>
          <td>
            <img src={AEoMTL} alt="book" className="book-image" />
          </td>
        </tr>
        <tr>
          <td>
            S. Shiva et al. <b>(2020)</b>. Development of CuAlNi Shape Memory Alloy Structures Using Cold
            Spray Deposition Technique with Laser Remelting. In: S. Pathak, G. Saha (eds) Cold Spray
            in the Realm of Additive Manufacturing. Materials Forming, Machining and Tribology.
            Springer, Cham. <a href="https://doi.org/10.1007/978-3-030-42756-6_7" target="_blank" rel="noreferrer">https://doi.org/10.1007/978-3-030-42756-6_7</a>
          </td>
          <td>
            <img src={CSintRoAM} alt="book" className="book-image" />
          </td>
        </tr>
        <tr>
          <td>
            S. Shiva, I.A. Palani, C.P. Paul, M. Kamaraj <b>(2020)</b>. Advanced Laser Based Surface
            Treatment Techniques to Improve the Quality of the Products. In: K. Gupta (eds) Materials
            Forming, Machining and Post Processing. Materials Forming, Machining and Tribology.
            Springer, Cham. <a href="https://doi.org/10.1007/978-3-030-18854-2_9" target="_blank" rel="noreferrer">https://doi.org/10.1007/978-3-030-18854-2_9</a>
          </td>
          <td>
            <img src={MFMaPP} alt="book" className="book-image" />
          </td>
        </tr>
        <tr>
          <td>
            S. Shiva, S. Brown, A. Cockburn, I.A. Palani, C.P. Paul, W. O’Neill <b>(2019)</b>. Evolution in
            Additive Manufacturing Techniques of Metals as Net-Shaped Products. In: K. Gupta (eds)
            Near Net Shape Manufacturing Processes. Materials Forming, Machining and Tribology.
            Springer, Cham. <a href="https://doi.org/10.1007/978-3-030-10579-2_3" target="_blank" rel="noreferrer">https://doi.org/10.1007/978-3-030-10579-2_3</a>
          </td>
          <td>
            <img src={NNSMP} alt="book" className="book-image" />
          </td>
        </tr>
        <tr>
          <td>
            S. Shiva, I.A. Palani, C.P. Paul, B. Singh <b>(2019)</b>. Comparative Investigation on the Effects
            of Laser Annealing and Laser Shock Peening on the As-Manufactured Ni–Ti Shape Memory
            Alloy Structures Developed by Laser Additive Manufacturing. In: U. Dixit, S. Joshi, J. Davim (eds) Application of Lasers in Manufacturing. Lecture Notes on Multidisciplinary
            Industrial Engineering. Springer, Singapore. <a href="https://doi.org/10.1007/978-981-13-0556-6_1" target="_blank" rel="noreferrer">https://doi.org/10.1007/978-981-13-0556-6_1</a>
          </td>
          <td>
            <img src={AoLiM} alt="book" className="book-image" />
          </td>
        </tr>
      </tbody>
    </table>
  </>
}

export default BookChapter;
