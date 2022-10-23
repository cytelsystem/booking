package digital.booking.services;

import digital.booking.entities.Category;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class CategoryServiceTest {

    @Autowired
    CategoryService categoryService;

    Category category1 = new Category();
    Category category2 = new Category();

}
