import { TransferProgressEvent } from '@azure/core-http';
import { PagedAsyncIterableIterator } from '@azure/core-paging';
import { BlobServiceClient, BlockBlobClient } from '@azure/storage-blob';
import { from, Observable, Subscriber } from 'rxjs';
import { distinctUntilChanged, scan, startWith } from 'rxjs/operators';

class BlobStorageService {
  constructor() { }

  downloadBlobItem(fullSasUri) {
      const blockBlobClient = this.getBlockBlobClient(fullSasUri);
      return from(blockBlobClient.download());
  }

  deleteBlobItem(fullSasUri) {
      const blockBlobClient = this.getBlockBlobClient(fullSasUri);
      return from(blockBlobClient.delete());
  }

  uploadToBlobStorage(file, fullSasUri) {
      const blockBlobClient = this.getBlockBlobClient(fullSasUri);
      return this.uploadFile(blockBlobClient, file);
  }

   getBlockBlobClient(fullSasUri) {
      return new BlockBlobClient(fullSasUri);
  }

   uploadFile(blockBlobClient, file) {
      return new Observable(observer => {
          blockBlobClient
              .uploadBrowserData(file, {
                  onProgress: this.onProgress(observer),
                  blobHTTPHeaders: {
                      blobContentType: file.type
                  }
              })
              .then(
                  this.onUploadComplete(observer),
                  this.onUploadError(observer)
              );
      }).pipe(distinctUntilChanged());
  }

   onUploadError(observer) {
      return (error) => observer.error(error);
  }

   onUploadComplete(observer,file) {
      return () => {
          observer.next(true);
          observer.complete();
      };
  }

   onProgress(observer) {
      return (progress) =>
          observer.next(progress.loadedBytes);
  }
}

export default new BlobStorageService();