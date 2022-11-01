package digital.booking.DTO;

import digital.booking.entities.Category;
import digital.booking.entities.City;
import digital.booking.entities.Feature;
import digital.booking.entities.Image;
import lombok.*;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ProductDTO {

    private Long id;
    private String title;
    private String description;
    private Category category;
    private List<Feature> features;
    private City city;
    private List<Image> images;


}
