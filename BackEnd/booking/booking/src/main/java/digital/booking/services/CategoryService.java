package digital.booking.services;

import com.fasterxml.jackson.databind.ObjectMapper;
import digital.booking.entities.Category;
import digital.booking.exceptions.BadRequestException;
import digital.booking.exceptions.NotFoundException;
import digital.booking.interfaces.IService;
import digital.booking.repositories.CategoryRepository;
import org.apache.log4j.Logger;
import org.hibernate.service.spi.ServiceException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryService implements IService<Category> {
    private final Logger logger = Logger.getLogger(CategoryService.class);
    @Autowired
    private CategoryRepository categoryRepository;

    @Autowired
    private ObjectMapper mapper;


    @Override
    public List<Category> searchAll() {
        logger.debug("Searching all categories...");
        return categoryRepository.findAll();
    }

    @Override
    public Category searchById(Long id) throws NotFoundException {
        logger.debug("Searching category with id: " + id);
        return categoryRepository.findById(id).orElseThrow(() -> new NotFoundException("The " +
                "category with the id: " + id + " was not found."));
    }

    @Override
    public Category create(Category category) throws BadRequestException {
        if (category == null){
            logger.error("The data entered is null.");
            throw new BadRequestException("The category is null.");
        } else{
            logger.debug("Creating new category...");
            logger.info("The category was created successfully.");
            return categoryRepository.save(category);
        }
    }

    @Override
    public Category update(Category category, Long id) throws NotFoundException {
        Category existingCategory = categoryRepository.findById(category.getId())
                .orElseThrow(() -> new NotFoundException("The category with id " + category.getId() +
                        "was not found."));

        logger.debug("Updating category...");
        existingCategory.setTitle(category.getTitle());
        existingCategory.setDescription(category.getDescription());
        existingCategory.setImageURL(category.getImageURL());

        categoryRepository.save(existingCategory);
        logger.info("The category was updated successfully.");
        return existingCategory;
    }

    @Override
    public void delete(Long id) throws NotFoundException {
        Category category = categoryRepository.findById(id).orElseThrow(() -> new NotFoundException("The " +
                "category with the id: " + id + " was not found."));
        logger.debug("Deleting category...");
        categoryRepository.delete(category);
    }
}

