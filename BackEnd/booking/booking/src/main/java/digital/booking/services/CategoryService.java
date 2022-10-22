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
import org.springframework.web.client.HttpClientErrorException;

import java.util.List;
import java.util.Optional;

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
        List<Category> categories = categoryRepository.findAll();
        if (categories.isEmpty()){
            throw new ServiceException("There are no categories to list.");
        } else {
            return categories;
        }
    }

    @Override
    public Category searchById(Long id) throws NotFoundException {
        logger.debug("Searching category with id: " + id);
        return categoryRepository.findById(id).orElseThrow(() -> new NotFoundException("The " +
                "category with the id: " + id + " was not found."));
    }

    @Override
    public Category create(Category category) {
        logger.debug("Creating new category...");
        return categoryRepository.save(category);
    }

    @Override
    public Category update(Category category) throws BadRequestException {
        Category categoryFound = categoryRepository.findById(category.getId())
                .orElseThrow(() -> new BadRequestException("The category with id " + category.getId() +
                        "was not found."));
        logger.debug("Updating category...");
        categoryRepository.save(categoryFound);
        return categoryFound;
    }

    private Category save(Category category) {
        logger.debug("Saving category...");
        return categoryRepository.save(category);
    }

    @Override
    public Boolean delete(Long id) throws NotFoundException {
        Category category = categoryRepository.findById(id).orElseThrow(() -> new NotFoundException("The " +
                "category with the id: " + id + " was not found."));
        logger.debug("Deleting category...");
        categoryRepository.delete(category);
        return null;
    }
}

