import { prisma } from "@/lib/prisma";

async function updateOrganizations() {
  try {
    // Buscar todas as organizações que não têm slug
    const organizations = await prisma.organization.findMany({
      where: {
        slug: null,
      },
    });

    console.log(`Found ${organizations.length} organizations without slug`);

    // Atualizar cada organização
    for (const org of organizations) {
      // Criar um slug base a partir do nome da organização
      let baseSlug = org.name
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "") // Remove acentos
        .replace(/[^a-z0-9]+/g, "-") // Substitui caracteres especiais por hífen
        .replace(/^-+|-+$/g, ""); // Remove hífens do início e fim

      let slug = baseSlug;
      let counter = 1;

      // Verificar se o slug já existe e adicionar um número se necessário
      while (true) {
        const existing = await prisma.organization.findUnique({
          where: { slug },
        });

        if (!existing || existing.id === org.id) {
          break;
        }

        slug = `${baseSlug}-${counter}`;
        counter++;
      }

      // Atualizar a organização com o novo slug
      await prisma.organization.update({
        where: { id: org.id },
        data: { slug },
      });

      console.log(`Updated organization ${org.name} with slug: ${slug}`);
    }

    console.log("All organizations updated successfully");
  } catch (error) {
    console.error("Error updating organizations:", error);
  } finally {
    await prisma.$disconnect();
  }
}

updateOrganizations();
