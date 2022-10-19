package digital.booking.services;

import digital.booking.entities.Category;
import digital.booking.exceptions.NotFoundException;
import digital.booking.interfaces.IService;

import java.util.List;

public class CategoryService implements IService<Category> {
    @Override
    public List<Category> searchAll() {
        return null;
    }

    @Override
    public Category searchById(Long id) throws NotFoundException {
        return null;
    }

    @Override
    public Category save(Category entity) {
        return null;
    }

    @Override
    public Category update(Category entity) {
        return null;
    }

    @Override
    public Boolean delete(Long id) {
        return null;
    }
}
