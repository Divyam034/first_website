from django.test import TestCase
from django.urls import reverse

class GallerySmokeTests(TestCase):
    def test_home_page(self):
        resp = self.client.get('/')
        self.assertEqual(resp.status_code, 200)

    def test_gallery_page(self):
        resp = self.client.get(reverse('gallery'))
        self.assertEqual(resp.status_code, 200)
