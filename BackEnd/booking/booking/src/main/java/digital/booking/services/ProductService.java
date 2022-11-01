package digital.booking.services;

import digital.booking.DTO.ProductDTO;
import digital.booking.exceptions.BadRequestException;
import digital.booking.exceptions.NotFoundException;
import digital.booking.interfaces.IService;

import java.util.List;

public class ProductService implements IService<ProductDTO> {


    @Override
    public List<ProductDTO> searchAll() {
        return null;
    }

    @Override
    public ProductDTO searchById(Long id) throws NotFoundException {
        return null;
    }

    @Override
    public ProductDTO create(ProductDTO entity) throws BadRequestException {
        return null;
    }

    @Override
    public ProductDTO update(ProductDTO entity, Long id) throws NotFoundException {
        return null;
    }

    @Override
    public void delete(Long id) throws NotFoundException {

    }
}
