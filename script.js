const formatCEP = (cep) => {
    cep = cep.replace(/\D/g, '');
    if (cep.length > 5) {
        cep = cep.replace(/^(\d{5})(\d{3})$/, "$1-$2");
    }
    return cep;
};

const formatPhoneNumber = (phone) => {
    phone = phone.replace(/\D/g, '');
    if (phone.length > 2) {
        phone = phone.replace(/^(\d{2})(\d{5})(\d{4})$/, "($1) $2-$3");
    }
    return phone;
};

document.addEventListener("DOMContentLoaded", function() {
    navigate('home');
});

document.getElementById('homeLink').addEventListener('click', function(event) {
    event.preventDefault();
    navigate('home');
});

document.getElementById('aboutLink').addEventListener('click', function(event) {
    event.preventDefault();
    navigate('about');
});

function navigate(page) {
    const contentDiv = document.getElementById('content');
    switch(page) {
        case 'home':
            renderHomePage(contentDiv);
            break;
        case 'about': 
            renderAboutPage(contentDiv);
            break;
        default:
            renderNotFoundPage(contentDiv);
    }
}

function renderAboutPage(contentDiv) {
    contentDiv.innerHTML = `
        <section class="py-5">
            <div class="container text-center">
                <h2>Sobre</h2>
                <p>Conheça mais sobre nós aqui.</p>
                <h3>Versão: 1.0</h3>
                <p>Data: 11 de junho de 2024</p>
                <p>Autor: Luann Gonçalves</p>
                <p>Descrição: Esta é uma aplicação simples para salvar seus contatos.</p>
            </div>
        </section>
    `;
}

function renderNotFoundPage(contentDiv) {
    contentDiv.innerHTML = '<h2>Página não encontrada</h2><p>A página solicitada não foi encontrada.</p>';
}

function renderHomePage(contentDiv) {
    contentDiv.innerHTML = `
        <section class="py-5">
            <div class="container text-center">
                <h2>Encontre seus contatos rapidamente</h2>
                <p>Bem-vindo ao QuickContact, o lugar perfeito para gerenciar seus contatos de forma eficiente.</p>
            </div>
        </section>

        <form id="contactForm"> 
            <input type="text" id="contactId" value="" style="display: none;">
            <div class="form-group">
                <label for="contactName" class="form-label">Nome</label>
                <input type="text" id="contactName" class="form-control" maxlength="50" required>
            </div>
            <div class="form-group">
                <label for="contactPhone" class="form-label">Telefone</label>
                <input type="tel" id="contactPhone" class="form-control" maxlength="11" required>
            </div>
            <div class="form-group">
                <label for="contactEmail" class="form-label">Email</label>
                <input type="email" id="contactEmail" class="form-control" maxlength="100" required>
            </div>
            <div class="form-row">
                <div class="form-group col-md-6">
                    <label for="contactCEP" class="form-label">CEP</label>
                    <input type="text" id="contactCEP" class="form-control" maxlength="9" required>
                </div>
                <div class="form-group col-md-6">
                    <label for="contactStreet" class="form-label">Rua</label>
                    <input type="text" id="contactStreet" class="form-control" maxlength="255" required>
                </div>
            </div>
            <div class="form-row">
                <div class="form-group col-md-6">
                    <label for="contactNeighborhood" class="form-label">Bairro</label>
                    <input type="text" id="contactNeighborhood" class="form-control" maxlength="100" required>
                </div>
                <div class="form-group col-md-6">
                    <label for="contactCity" class="form-label">Cidade</label>
                    <input type="text" id="contactCity" class="form-control" maxlength="100" required>
                </div>
            </div>
            <div class="form-group">
                <label for="contactUF" class="form-label">Estado</label>
                <select id="contactUF" class="form-control" required>
                    <option value="">Selecione o Estado</option>
                    <option value="AC">Acre</option>
                    <option value="AL">Alagoas</option>
                    <option value="AP">Amapá</option>
                    <option value="AM">Amazonas</option>
                    <option value="BA">Bahia</option>
                    <option value="CE">Ceará</option>
                    <option value="DF">Distrito Federal</option>
                    <option value="ES">Espírito Santo</option>
                    <option value="GO">Goiás</option>
                    <option value="MA">Maranhão</option>
                    <option value="MT">Mato Grosso</option>
                    <option value="MS">Mato Grosso do Sul</option>
                    <option value="MG">Minas Gerais</option>
                    <option value="PA">Pará</option>
                    <option value="PB">Paraíba</option>
                    <option value="PR">Paraná</option>
                    <option value="PE">Pernambuco</option>
                    <option value="PI">Piauí</option>
                    <option value="RJ">Rio de Janeiro</option>
                    <option value="RN">Rio Grande do Norte</option>
                    <option value="RS">Rio Grande do Sul</option>
                    <option value="RO">Rondônia</option>
                    <option value="RR">Roraima</option>
                    <option value="SC">Santa Catarina</option>
                    <option value="SP">São Paulo</option>
                    <option value="SE">Sergipe</option>
                    <option value="TO">Tocantins</option>
                </select>
            </div>
            <div class="text-center">
                <button id="addContactButton" type="submit" class="btn btn-primary"><i class="fas fa-plus"></i> Adicionar</button>
                <button id="updateContactButton" type="button" class="btn btn-warning text-white" disabled><i class="fas fa-sync"></i> Atualizar</button>
                <button id="searchContactButton" type="submit" class="btn btn-secondary"><i class="fas fa-search"></i> Procurar</button>
            </div>
        </form>

        <br><h3 class="text-center">Meus Contatos:</h3>
        <div class="container">
            <div class="table-responsive">
                <table id="contactsTable" class="table table-bordered text-center">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Telefone</th>
                            <th>Email</th>
                            <th>CEP</th>
                            <th>Rua</th>
                            <th>Bairro</th>
                            <th>Cidade</th>
                            <th>UF</th>
                            <th>Excluir</th>
                            <th style="display: none;">ID</th>
                        </tr>
                    </thead>
                    <tbody id="contactsList">
                        <!-- Aqui serão inseridos os registros de contatos -->
                    </tbody>
                </table>
            </div>
        </div>
    `;

    document.getElementById('contactCEP').addEventListener('input', function(event) {
        const cepInput = event.target;
        cepInput.value = formatCEP(cepInput.value);
    });

    document.getElementById('contactPhone').addEventListener('input', function(event) {
        const phoneInput = event.target;
        phoneInput.value = formatPhoneNumber(phoneInput.value);
    });

    document.getElementById('contactCEP').addEventListener('blur', function(event) {
        const cep = event.target.value.trim();
        if (cep.length === 9) {
            fetch(`https://viacep.com.br/ws/${cep.replace(/\D/g, '')}/json/`)
                .then(response => response.json())
                .then(data => {
                    document.getElementById('contactStreet').value = data.logradouro || '';
                    document.getElementById('contactNeighborhood').value = data.bairro || '';
                    document.getElementById('contactCity').value = data.localidade || '';
                    document.getElementById('contactUF').value = data.uf || '';
                })
                .catch(error => console.error('Erro ao buscar dados do CEP:', error));
        }
    });

    document.getElementById('addContactButton').addEventListener('click', function(event) {
        event.preventDefault();
        newContact();
    });

    document.getElementById('updateContactButton').addEventListener('click', function(event) {
        event.preventDefault();
        updateContact();
    });

    document.getElementById('searchContactButton').addEventListener('click', function(event) {
        event.preventDefault();
        const contactName = document.getElementById('contactName').value.trim();
        if (contactName !== '') {
            searchContactByName(contactName);
        } else {
            alert('Por favor, insira um nome para procurar.');
            document.getElementById('contactName').focus();
        }
    });

    const contactsTable = document.getElementById('contactsTable');
    contactsTable.addEventListener('click', function(event) {
        const target = event.target;

        if (target.tagName.toLowerCase() === 'td' || target.tagName.toLowerCase() === 'tr') {
            const selectedRow = target.closest('tr');

            if (selectedRow && !selectedRow.classList.contains('header-row')) {
                if (selectedRow.classList.contains('selected')) {
                    selectedRow.classList.remove('selected');
                    document.getElementById('updateContactButton').disabled = true;
                    document.getElementById('addContactButton').disabled = false;
                    document.getElementById('searchContactButton').disabled = false;
                    clearFormFields();
                } else {
                    const currentSelectedRow = contactsTable.querySelector('tr.selected');
                    if (currentSelectedRow) {
                        currentSelectedRow.classList.remove('selected');
                    }
                    selectedRow.classList.add('selected');

                    const cells = selectedRow.querySelectorAll('td');
                    document.getElementById('contactName').value = cells[0].textContent.trim();
                    document.getElementById('contactPhone').value = cells[1].textContent.trim();
                    document.getElementById('contactEmail').value = cells[2].textContent.trim();
                    document.getElementById('contactCEP').value = cells[3].textContent.trim();
                    document.getElementById('contactStreet').value = cells[4].textContent.trim();
                    document.getElementById('contactNeighborhood').value = cells[5].textContent.trim();
                    document.getElementById('contactCity').value = cells[6].textContent.trim();
                    document.getElementById('contactUF').value = cells[7].textContent.trim();
                    document.getElementById('contactId').value = cells[9].textContent.trim();

                    document.getElementById('updateContactButton').disabled = false;
                    document.getElementById('addContactButton').disabled = true;
                    document.getElementById('searchContactButton').disabled = true;
                }

                updateDeleteIconsState();
            }
        }
    });

    getContactList();
}

function clearFormFields() {
    document.getElementById('contactName').value = '';
    document.getElementById('contactPhone').value = '';
    document.getElementById('contactEmail').value = '';
    document.getElementById('contactCEP').value = '';
    document.getElementById('contactStreet').value = '';
    document.getElementById('contactNeighborhood').value = '';
    document.getElementById('contactCity').value = '';
    document.getElementById('contactUF').value = '';
}

function updateDeleteIconsState() {
    const contactsTable = document.getElementById('contactsTable');
    const rows = contactsTable.querySelectorAll('tbody tr');

    let isSelected = false;

    rows.forEach(row => {
        const deleteIcon = row.querySelector('.delete-icon');
        if (row.classList.contains('selected')) {
            isSelected = true;
            deleteIcon.classList.remove('disabled');
            deleteIcon.removeAttribute('data-disabled');
        } else {
            deleteIcon.classList.add('disabled');
            deleteIcon.setAttribute('data-disabled', 'true');
        }
    });

    if (isSelected) {
        document.getElementById('updateContactButton').disabled = false;
        document.getElementById('addContactButton').disabled = true;
        document.getElementById('searchContactButton').disabled = true;
    } else {
        document.getElementById('updateContactButton').disabled = true;
        document.getElementById('addContactButton').disabled = false;
        document.getElementById('searchContactButton').disabled = false;
    }
}

const getContactList = async () => {
    try {
        const response = await fetch('http://127.0.0.1:5000/contatos');
        if (!response.ok) {
            throw new Error('Erro ao buscar a lista de contatos.');
        }
        const data = await response.json();
        const contactsList = document.getElementById('contactsList');
        contactsList.innerHTML = '';
        data.contatos.forEach(item => {
            const row = `
                <tr>
                    <td>${item.nome}</td>
                    <td>${formatPhoneNumber(item.telefone)}</td>
                    <td>${item.email}</td>
                    <td>${formatCEP(item.cep)}</td>
                    <td>${item.rua}</td>
                    <td>${item.bairro}</td>
                    <td>${item.cidade}</td>
                    <td>${item.uf}</td>
                    <td><i class="fas fa-times delete-icon" onclick="deleteContact('${item.nome}')"></i></td>
                    <td style="display: none;">${item.id_contato}</td>
                </tr>
            `;
            contactsList.insertAdjacentHTML('beforeend', row);
        });
        updateDeleteIconsState();
    } catch (error) {
        console.error('Erro:', error);
        alert('Erro ao buscar a lista de contatos.');
    }
};

const deleteContact = async (contactName) => {  
    const contactId = document.getElementById('contactId').value.trim();
    const confirmation = confirm(`Tem certeza que deseja excluir o contato: ${contactName}?`);
    if (!confirmation) {
        return;
    }

    try {
        const response = await fetch(`http://127.0.0.1:5000/contato?id_contato=${contactId}`, {
            method: 'DELETE'
        });
        if (!response.ok) {
            throw new Error('Erro ao excluir o contato.');
        }
        await getContactList();
    } catch (error) {
        console.error('Erro:', error);
        alert(error.message);
    }
    clearFormFields();
};

const searchContactByName = async (contactName) => {
    try {
        const response = await fetch(`http://127.0.0.1:5000/contato?nome=${contactName}`);
        if (response.ok) {
            const contact = await response.json();
            displayContact(contact);
            markContactInTable(contact);
        } else if (response.status === 404) {
            alert(`Contato '${contactName}' não encontrado.`);
            clearFormFields();
            document.getElementById('addContactButton').disabled = false;
            document.getElementById('searchContactButton').disabled = false;
        } else {
            throw new Error('Erro ao buscar o contato.');
        }
    } catch (error) {
        console.error('Erro:', error);
        alert(error.message);
    }
};

function displayContact(contact) {
    document.getElementById('contactId').value = contact.id_contato;
    document.getElementById('contactName').value = contact.nome;
    document.getElementById('contactPhone').value = formatPhoneNumber(contact.telefone);
    document.getElementById('contactEmail').value = contact.email;
    document.getElementById('contactCEP').value = formatCEP(contact.cep);
    document.getElementById('contactStreet').value = contact.rua;
    document.getElementById('contactNeighborhood').value = contact.bairro;
    document.getElementById('contactCity').value = contact.cidade;
    document.getElementById('contactUF').value = contact.uf;

    document.getElementById('updateContactButton').disabled = false;
}

function markContactInTable(contact) {
    const contactsTable = document.getElementById('contactsTable');
    const rows = contactsTable.querySelectorAll('tbody tr');

    let contactFound = false;

    rows.forEach(row => {
        const nameCell = row.querySelector('td:first-child');
        if (nameCell.textContent.trim() === contact.nome) {
            row.classList.add('selected');
            row.scrollIntoView({ behavior: 'smooth', block: 'center' });
            contactFound = true;
            const deleteIcon = row.querySelector('.delete-icon');
            deleteIcon.classList.remove('disabled');
            deleteIcon.removeAttribute('data-disabled');
        } else {
            row.classList.remove('selected');
            const deleteIcon = row.querySelector('.delete-icon');
            deleteIcon.classList.add('disabled');
            deleteIcon.setAttribute('data-disabled', 'true');
        }
    });

    document.getElementById('addContactButton').disabled = contactFound;
    document.getElementById('updateContactButton').disabled = !contactFound;
    document.getElementById('searchContactButton').disabled = contactFound;
}

const validateFormFields = () => {
    const fields = [
        { id: 'contactName', message: 'Por favor, insira o nome.' },
        { id: 'contactPhone', message: 'Por favor, insira o telefone.' },
        { id: 'contactEmail', message: 'Por favor, insira o email.' },
        { id: 'contactCEP', message: 'Por favor, insira o CEP.' },
        { id: 'contactStreet', message: 'Por favor, insira a rua.' },
        { id: 'contactNeighborhood', message: 'Por favor, insira o bairro.' },
        { id: 'contactCity', message: 'Por favor, insira a cidade.' },
        { id: 'contactUF', message: 'Por favor, selecione o estado.' }
    ];

    for (const field of fields) {
        const value = document.getElementById(field.id).value.trim();
        if (!value) {
            alert(field.message);
            document.getElementById(field.id).focus();
            return false;
        }
    }

    return true;
};

const newContact = async () => {
    if (!validateFormFields()) {
        return;
    }

    const nome = document.getElementById('contactName').value.trim();
    const telefone = document.getElementById('contactPhone').value.replace(/\D/g, '');
    const email = document.getElementById('contactEmail').value.trim();
    const cep = document.getElementById('contactCEP').value.replace(/\D/g, '');
    const rua = document.getElementById('contactStreet').value.trim();
    const bairro = document.getElementById('contactNeighborhood').value.trim();
    const cidade = document.getElementById('contactCity').value.trim();
    const uf = document.getElementById('contactUF').value.trim();

    try {
        const formData = new FormData();
        formData.append('nome', nome);
        formData.append('telefone', telefone);
        formData.append('email', email);
        formData.append('cep', cep);
        formData.append('rua', rua);
        formData.append('bairro', bairro);
        formData.append('cidade', cidade);
        formData.append('uf', uf);

        const response = await fetch('http://127.0.0.1:5000/contato', {
            method: 'POST',
            body: formData
        });

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message || 'Erro ao adicionar o contato.');
        }

        alert(`Contato '${nome}' adicionado com sucesso!`);
        clearFormFields();
        await getContactList();
    } catch (error) {
        console.error('Erro:', error);
        alert(error.message || 'Erro ao adicionar o contato.');
    }
};

const updateContact = async () => {
    if (!validateFormFields()) {
        return;
    }

    const nome = document.getElementById('contactName').value.trim();
    const telefone = document.getElementById('contactPhone').value.replace(/\D/g, '');
    const email = document.getElementById('contactEmail').value.trim();
    const cep = document.getElementById('contactCEP').value.replace(/\D/g, '');
    const rua = document.getElementById('contactStreet').value.trim();
    const bairro = document.getElementById('contactNeighborhood').value.trim();
    const cidade = document.getElementById('contactCity').value.trim();
    const uf = document.getElementById('contactUF').value.trim();

    if (!confirm(`Tem certeza que deseja atualizar o contato '${nome}'?`)) {
        return;
    }

    try {
        const formData = new FormData();
        formData.append('nome', nome);
        formData.append('telefone', telefone);
        formData.append('email', email);
        formData.append('cep', cep);
        formData.append('rua', rua);
        formData.append('bairro', bairro);
        formData.append('cidade', cidade);
        formData.append('uf', uf);

        const contactId = document.getElementById('contactId').value.trim();
        const response = await fetch(`http://127.0.0.1:5000/contato?id_contato=${encodeURIComponent(contactId)}`, {
            method: 'PUT',
            body: formData
        });

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message || 'Erro ao atualizar o contato.');
        }

        alert(`Contato '${nome}' atualizado com sucesso!`);
        clearFormFields();
        await getContactList();
    } catch (error) {
        console.error('Erro:', error);
        alert(error.message || 'Erro ao atualizar o contato.');
    }
};
